import { useEffect, useState } from 'react';
import { ConfigService, type AppConfig } from '../services/ConfigService';

interface UseConfigResult {
  config: AppConfig | null;
  loading: boolean;
  error: Error | null;
}

export function useConfig(): UseConfigResult {
  const [config, setConfig] = useState<AppConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    ConfigService.load()
      .then((loaded) => {
        if (!cancelled) setConfig(loaded);
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
  }, []);

  return { config, loading, error };
}
