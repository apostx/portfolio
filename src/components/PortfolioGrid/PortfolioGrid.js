import { PortfolioCard } from '../PortfolioCard/PortfolioCard.js';

export class PortfolioGrid {
  static render(items) {
    const section = document.createElement('section');
    section.className = 'portfolio-section';

    const container = document.createElement('div');
    container.className = 'container';

    const title = document.createElement('h2');
    title.textContent = 'Side projects';
    container.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'portfolio-grid';

    if (items.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'empty-state';
      empty.textContent = 'No portfolio items found.';
      grid.appendChild(empty);
    } else {
      items.forEach((item) => {
        const card = PortfolioCard.render(item);
        grid.appendChild(card);
      });
    }

    container.appendChild(grid);
    section.appendChild(container);

    return section;
  }
}
