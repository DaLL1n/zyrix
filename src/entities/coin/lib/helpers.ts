/**
 * Проверяет, выросла ли цена монеты за последние 24 часа
 * @param priceChange24h - процент изменения цены за 24 часа
 * @returns true если цена выросла (>= 0), false если упала
 */
export const isPriceUp24h = (priceChange24h: number): boolean => {
  return priceChange24h >= 0;
};

/**
 * Получает цвет для отображения изменения цены
 * @param priceChange24h - процент изменения цены за 24 часа
 * @returns цвет для позитивного или негативного изменения
 */
export const getPriceChangeColor = (
  priceChange24h: number,
): '#4CAF50' | '#D32F2F' => {
  return isPriceUp24h(priceChange24h) ? '#4CAF50' : '#D32F2F';
};
