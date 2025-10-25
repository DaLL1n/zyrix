// create-component.js
const fs = require('fs');
const path = require('path');

// --- Получаем аргументы из командной строки ---
const targetPathArg = process.argv[2]; // e.g., 'shared/ui' or 'features/auth'
const componentName = process.argv[3]; // e.g., 'MyButton'

if (!targetPathArg || !componentName) {
  console.error('❌ Ошибка: Укажите путь (слой/сегмент) и имя компонента.');
  console.log('Пример: node create-component.js shared/ui MyButton');
  process.exit(1);
}

// --- Проверка валидности имени компонента ---
if (!/^[A-Z][A-Za-z0-9]+$/.test(componentName)) {
  console.error(
    `❌ Ошибка: Имя компонента "${componentName}" должно быть в PascalCase (например, MyComponent).`,
  );
  process.exit(1);
}

// --- Формируем пути ---
const basePath = path.resolve(__dirname, 'src', targetPathArg); // Путь к папке слоя/сегмента
const componentDir = path.join(basePath, componentName); // Полный путь к папке компонента

// --- Проверяем, существует ли папка ---
if (fs.existsSync(componentDir)) {
  console.error(
    `❌ Ошибка: Компонент "${componentName}" уже существует в "src/${targetPathArg}".`,
  );
  process.exit(1);
}

// --- Создаем папку компонента ---
try {
  fs.mkdirSync(componentDir, { recursive: true });
  console.log(`📁 Создана папка: ${componentDir}`);
} catch (err) {
  console.error(`❌ Не удалось создать папку: ${err.message}`);
  process.exit(1);
}

// --- Определяем, нужно ли создавать полную FSD структуру (сегменты) ---
// Исключаем shared/ui и shared/lib из создания полной структуры
const isFullFsdStructure =
  !targetPathArg.startsWith('shared/ui') &&
  !targetPathArg.startsWith('shared/lib');
let uiDir = componentDir; // По умолчанию файлы кладем в корень компонента

if (isFullFsdStructure) {
  // --- Создаем стандартные папки FSD-сегментов ---
  const segments = ['ui', 'model', 'api', 'lib', 'config'];
  segments.forEach((segment) => {
    const segmentDir = path.join(componentDir, segment);
    try {
      fs.mkdirSync(segmentDir);
      console.log(`   📁 Создана подпапка: ${segment}`);
    } catch (err) {
      if (err.code !== 'EEXIST') {
        console.error(
          `   ❌ Не удалось создать подпапку ${segment}: ${err.message}`,
        );
      }
    }
  });
  // Для полной структуры файлы компонента кладем в ui
  uiDir = path.join(componentDir, 'ui');
} else {
  // Для shared/ui и shared/lib папку ui создавать не нужно,
  // но если targetPathArg уже shared/ui, то uiDir должен быть componentDir
  // Проверяем, существует ли uiDir, если нет (для shared/lib), создаем
  if (!fs.existsSync(uiDir)) {
    try {
      // Для shared/ui uiDir == componentDir (уже создан)
      // Для shared/lib и других в shared создаем componentDir (например shared/config/Paths)
      if (!targetPathArg.startsWith('shared/ui')) {
        fs.mkdirSync(uiDir, { recursive: true });
        console.log(
          `   📁 Создана папка: ${path.basename(uiDir)} (для файлов)`,
        );
      }
    } catch (err) {
      if (err.code !== 'EEXIST') {
        console.error(
          `   ❌ Не удалось создать папку ${path.basename(uiDir)}: ${
            err.message
          }`,
        );
      }
    }
  }
}

// --- Создаем файлы компонента (в uiDir) ---

// 1. Файл компонента (.tsx)
const componentFileName = `${componentName}.tsx`;
const componentFilePath = path.join(uiDir, componentFileName);
const componentContent = `import React from 'react';
import './${componentName}.scss';

interface ${componentName}Props {

}

const ${componentName} = ({}: ${componentName}Props) => {
  return <></>
};

export default ${componentName};
`;
try {
  // Убедимся, что папка uiDir существует перед записью файла
  if (!fs.existsSync(uiDir)) {
    fs.mkdirSync(uiDir, { recursive: true });
    console.log(`   📁 Создана папка: ${path.basename(uiDir)} (для файлов)`);
  }
  fs.writeFileSync(componentFilePath, componentContent);
  console.log(
    `   📄 Создан файл: ${path
      .relative(componentDir, componentFilePath)
      .replace(/\\/g, '/')}`,
  );
} catch (err) {
  console.error(
    `   ❌ Не удалось создать файл ${componentFileName}: ${err.message}`,
  );
}

// 2. Файл стилей (.scss)
const styleFileName = `${componentName}.scss`;
const styleFilePath = path.join(uiDir, styleFileName);
const styleContent = `.${componentName.toLocaleLowerCase()}`;
try {
  fs.writeFileSync(styleFilePath, styleContent);
  console.log(
    `   📄 Создан файл: ${path
      .relative(componentDir, styleFilePath)
      .replace(/\\/g, '/')}`,
  );
} catch (err) {
  console.error(
    `   ❌ Не удалось создать файл ${styleFileName}: ${err.message}`,
  );
}

// 3. Файл публичного API (index.ts) - создаем только если нужна полная структура
if (isFullFsdStructure) {
  const indexContent = `export { default as ${componentName} } from './ui/${componentName}';\n`;
  try {
    fs.writeFileSync(path.join(componentDir, 'index.ts'), indexContent);
    console.log(`   📄 Создан файл: index.ts (Public API)`);
  } catch (err) {
    console.error(`   ❌ Не удалось создать файл index.ts: ${err.message}`);
  }
} else {
  console.log(`   ℹ️ Пропущен index.ts для ${targetPathArg}`);
}

console.log(
  `\n✅ Компонент "${componentName}" ${
    isFullFsdStructure ? 'со структурой FSD ' : ''
  }успешно создан в "src/${targetPathArg}"!`,
);
