export default {
  title: 'Design System/Colors',
  parameters: {
    layout: 'fullscreen',
  },
};

export const AllThemes = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '2rem';
    container.style.backgroundColor = '#f5f5f5';

    const title = document.createElement('h1');
    title.textContent = 'Theme Colors';
    title.style.marginBottom = '2rem';
    container.appendChild(title);

    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
    grid.style.gap = '1.5rem';

    for (let i = 1; i <= 1; i++) {
      const themeCard = document.createElement('div');
      themeCard.style.padding = '1rem';
      themeCard.style.borderRadius = '8px';
      themeCard.style.backgroundColor = '#fff';
      themeCard.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';

      const themeLabel = document.createElement('h3');
      themeLabel.textContent = `Theme ${i}`;
      themeLabel.style.marginBottom = '1rem';
      themeCard.appendChild(themeLabel);

      const colorBox = document.createElement('div');
      colorBox.style.height = '60px';
      colorBox.style.borderRadius = '4px';
      colorBox.style.marginBottom = '0.5rem';

      // Load the theme to extract primary color using CSS variables
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `./src/styles/themes/theme-${i}.css`;
      link.onload = () => {
        const root = document.documentElement;
        const primaryColor = getComputedStyle(root).getPropertyValue('--color-primary').trim();
        colorBox.style.backgroundColor = primaryColor || '#007bff';
      };
      document.head.appendChild(link);

      themeCard.appendChild(colorBox);
      grid.appendChild(themeCard);
    }

    container.appendChild(grid);
    return container;
  },
};
