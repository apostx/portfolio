import type { PortfolioItem } from '../../services/SheetsService';
import { PortfolioCard } from '../PortfolioCard/PortfolioCard';
import './PortfolioGrid.css';

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <section className="portfolio-section">
      <div className="container">
        <h2>Side projects</h2>
        <div className="portfolio-grid">
          {items.length === 0 ? (
            <p className="empty-state">No portfolio items found.</p>
          ) : (
            items.map((item) => <PortfolioCard key={item.name} item={item} />)
          )}
        </div>
      </div>
    </section>
  );
}
