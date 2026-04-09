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
  const themeLink = document.createElement('link');
  themeLink.rel = 'stylesheet';
  themeLink.href = `/styles/designs/${themeName}.css`;
  
  // Remove any existing design stylesheets
  const existingLinks = document.querySelectorAll('link[href*="/styles/designs/"]');
  existingLinks.forEach(link => link.remove());
  
  document.head.appendChild(themeLink);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
