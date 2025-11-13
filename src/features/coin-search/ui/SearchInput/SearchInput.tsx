'use client';

import type { SearchCoins } from '@/entities/coin';
import { Input } from '@/shared/ui';
import { useCallback, useMemo, useState } from 'react';

interface SearchInputProps {
  isOpen?: boolean;
  data: SearchCoins;
  onFilteredData: (filtered: SearchCoins) => void;
}

const SearchInput = ({ isOpen, data, onFilteredData }: SearchInputProps) => {
  const [valueInput, setValueInput] = useState<string>('');

  // Фильтрация данных по запросу
  const filteredData = useMemo(() => {
    if (!valueInput.trim()) {
      return data;
    }

    const searchLower = valueInput.toLowerCase().trim();

    return data.filter((coin) => {
      return (
        coin.name.toLowerCase().includes(searchLower) ||
        coin.symbol.toLowerCase().includes(searchLower) ||
        coin.id.toLowerCase().includes(searchLower)
      );
    });
  }, [valueInput, data]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setValueInput(value);

      // Опционально: передаем отфильтрованные данные наверх
      if (onFilteredData) {
        // Вызываем после короткой задержки для debounce
        setTimeout(() => {
          onFilteredData(filteredData);
        }, 0);
      }
    },
    [filteredData, onFilteredData],
  );

  return (
    <Input
      onChange={handleChange}
      value={valueInput}
      type="search"
      icon="search"
      placeholder="Search"
    />
  );
};

export default SearchInput;
