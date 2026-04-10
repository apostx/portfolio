import { useConfig } from './hooks/useConfig';
import { usePortfolioItems } from './hooks/usePortfolioItems';
import { useTheme } from './hooks/useTheme';
import { Header } from './components/Header/Header';
import { PersonalCard } from './components/PersonalCard/PersonalCard';
import { PortfolioGrid } from './components/PortfolioGrid/PortfolioGrid';

export function App() {
  const { config, loading: configLoading, error: configError } = useConfig();
  const { items, error: itemsError } = usePortfolioItems(config);

  useTheme(config?.theme);

  if (configError) {
    return (
      <div className="error">
        <p>Error loading portfolio: {configError.message}</p>
      </div>
    );
  }

  if (configLoading || !config) {
    return null;
  }

  return (
    <>
      <Header header={config.header} personalInfo={config.personalInfo} />
      <PersonalCard personalInfo={config.personalInfo} />
      <PortfolioGrid items={items} />
      {itemsError && (
        <div className="error">
          <p>Error loading portfolio items: {itemsError.message}</p>
        </div>
      )}
    </>
  );
}
