import { useState } from 'react';
import type { PortfolioItem } from '../../services/SheetsService';
import './PortfolioCard.css';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = item.image && !imgFailed;

  return (
    <article className="portfolio-card">
      {showImage && (
        <img
          src={item.image}
          alt={item.name}
          className="portfolio-card-image"
          onError={() => setImgFailed(true)}
        />
      )}
      <div className="portfolio-card-content">
        <h3>{item.name}</h3>
        <p className="portfolio-description">{item.description}</p>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link"
          >
            View Project →
          </a>
        )}
      </div>
    </article>
  );
}
