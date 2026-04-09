import { ConfigService } from './services/ConfigService.js';
import { SheetsService } from './services/SheetsService.js';
import { Header } from './components/Header/Header.js';
import { PersonalCard } from './components/PersonalCard/PersonalCard.js';
import { PortfolioGrid } from './components/PortfolioGrid/PortfolioGrid.js';

async function initApp() {
  try {
    // Load configuration
    const config = await ConfigService.load();
    console.log('Config loaded:', config);

    // Apply theme — ?design=1..5 selects from the 5 new designs, otherwise use config default
    const theme = resolveTheme(config.theme);
    applyTheme(theme);

    // Fetch portfolio items
    const portfolioItems = await SheetsService.fetchPortfolioItems(config);
    console.log('Portfolio items:', portfolioItems);

    // Build page
    const app = document.getElementById('app');
    app.innerHTML = '';

    // Header
    const header = Header.render(config.header, config.personalInfo);
    app.appendChild(header);

    // Personal Card
    const personalCard = PersonalCard.render(config.personalInfo);
    app.appendChild(personalCard);

    // Portfolio Grid
    const portfolioGrid = PortfolioGrid.render(portfolioItems);
    app.appendChild(portfolioGrid);

  } catch (error) {
    console.error('Error initializing app:', error);
    document.getElementById('app').innerHTML = `<div class="error"><p>Error loading portfolio: ${error.message}</p></div>`;
  }
}

// Vite bundles all design CSS files as assets and gives us their final hashed URLs.
// This works in both dev and prod without needing to duplicate files into public/.
const designUrls = import.meta.glob('./styles/designs/*.css', {
  query: '?url',
  import: 'default',
  eager: true,
});

// Build a name → URL lookup: { 'design-11-glassmorphism': '/assets/design-11-glassmorphism-abc123.css', ... }
const designMap = Object.fromEntries(
  Object.entries(designUrls).map(([path, url]) => {
    const name = path.split('/').pop().replace('.css', '');
    return [name, url];
  })
);

const NEW_DESIGNS = [
  'design-11-glassmorphism',
  'design-12-neobrutalism',
  'design-13-bento-minimal',
  'design-14-aurora-mesh',
  'design-15-editorial-mono',
];

function resolveTheme(configTheme) {
  const param = new URLSearchParams(window.location.search).get('design');
  if (param !== null) {
    const index = parseInt(param, 10);
    if (index >= 1 && index <= NEW_DESIGNS.length) {
      return NEW_DESIGNS[index - 1];
    }
  }
  return configTheme;
}

function applyTheme(themeName) {
  const href = designMap[themeName];
  if (!href) {
    console.warn(`Theme "${themeName}" not found. Available:`, Object.keys(designMap));
    return;
  }

  // Remove any existing design stylesheets
  document.querySelectorAll('link[data-theme]').forEach((link) => link.remove());

  const themeLink = document.createElement('link');
  themeLink.rel = 'stylesheet';
  themeLink.href = href;
  themeLink.setAttribute('data-theme', themeName);
  document.head.appendChild(themeLink);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
