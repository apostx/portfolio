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

    // Apply theme
    applyTheme(config.theme);

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
