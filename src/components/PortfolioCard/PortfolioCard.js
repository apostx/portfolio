export class PortfolioCard {
  static render(item) {
    const card = document.createElement('article');
    card.className = 'portfolio-card';

    // Add image if provided
    if (item.image) {
      const imageEl = document.createElement('img');
      imageEl.src = item.image;
      imageEl.alt = item.name;
      imageEl.className = 'portfolio-card-image';
      imageEl.onerror = () => {
        imageEl.style.display = 'none';
      };
      card.appendChild(imageEl);
    }

    // Add content wrapper
    const contentEl = document.createElement('div');
    contentEl.className = 'portfolio-card-content';

    const titleEl = document.createElement('h3');
    titleEl.textContent = item.name;
    contentEl.appendChild(titleEl);

    const descEl = document.createElement('p');
    descEl.className = 'portfolio-description';
    descEl.textContent = item.description;
    contentEl.appendChild(descEl);

    if (item.link) {
      const link = document.createElement('a');
      link.href = item.link;
      link.textContent = 'View Project →';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.className = 'portfolio-link';
      contentEl.appendChild(link);
    }

    card.appendChild(contentEl);
    return card;
  }
}
