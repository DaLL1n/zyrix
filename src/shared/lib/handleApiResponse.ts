const handleApiResponse = async (response: Response): Promise<any> => {
  // Проверяем, успешен ли запрос (статус 200-299)
  if (response.ok) {
    // Если да, парсим и возвращаем JSON
    return response.json();
  } else {
    // Если нет, пытаемся получить текст ошибки из ответа
    let errorText = '';
    try {
      errorText = await response.text(); // Читаем тело ответа как текст
    } catch (err) {
      // Игнорируем ошибку чтения тела, если она возникла
    }
    throw new Error(
      `Ошибка API: ${response.status} ${response.statusText}. ${errorText}`,
    );
  }
};

export default handleApiResponse;
