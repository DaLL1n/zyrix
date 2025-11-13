import { fetchSearchCoins, fetchTopSearchCoins } from '@/entities/coin';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

interface UseSearchCoinsProps {
  isOpen: boolean;
  valueInput: string;
}

const useSearchCoins = ({ isOpen, valueInput }: UseSearchCoinsProps) => {
  const isEmptyInput = valueInput.trim().length === 0;

  const queryOptions = {
    refetchInterval: 120000,
    staleTime: 60000,
    refetchOnWindowFocus: true,
  };

  const topSearchQuery = useQuery({
    queryKey: ['trending'],
    queryFn: fetchTopSearchCoins,
    enabled: isOpen && isEmptyInput,
    ...queryOptions,
  });

  const searchQuery = useQuery({
    queryKey: ['search'],
    queryFn: fetchSearchCoins,
    enabled: isOpen && !isEmptyInput,
    ...queryOptions,
  });

  const searchCoins = useMemo(() => {
    if (isEmptyInput || !searchQuery.data) return undefined;

    const inputValue = valueInput.toLowerCase().trim();

    return searchQuery.data.filter((coin) => {
      const coinName = coin.name.toLowerCase();
      const coinSymbol = coin.symbol.toLowerCase();
      return coinName.includes(inputValue) || coinSymbol.includes(inputValue);
    });
  }, [searchQuery.data, valueInput, isEmptyInput]);

  const isLoading = topSearchQuery.isLoading || searchQuery.isLoading;
  const isError = topSearchQuery.isError || searchQuery.isError;
  const data = isEmptyInput ? topSearchQuery.data : searchCoins;

  return {
    searchCoins,
    data,
    isLoading,
    isError,
  };
};

export default useSearchCoins;
