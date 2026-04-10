import { useEffect, useState } from 'react';
import { SheetsService, type PortfolioItem } from '../services/SheetsService';
import type { AppConfig } from '../services/ConfigService';

interface UsePortfolioItemsResult {
  items: PortfolioItem[];
  loading: boolean;
  error: Error | null;
}

export function usePortfolioItems(config: AppConfig | null): UsePortfolioItemsResult {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!config) return;
    let cancelled = false;
    setLoading(true);
    SheetsService.fetchPortfolioItems(config)
      .then((fetched) => {
        if (!cancelled) setItems(fetched);
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err : new Error(String(err)));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [config]);

  return { items, loading, error };
}
