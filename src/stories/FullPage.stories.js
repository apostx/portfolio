import '../../src/components/Header/Header.css';
import '../../src/components/PersonalCard/PersonalCard.css';
import '../../src/components/PortfolioGrid/PortfolioGrid.css';
import '../../src/components/PortfolioCard/PortfolioCard.css';
import { Header } from '../../src/components/Header/Header.js';
import { PersonalCard } from '../../src/components/PersonalCard/PersonalCard.js';
import { PortfolioGrid } from '../../src/components/PortfolioGrid/PortfolioGrid.js';

export default {
  title: 'Pages/Full Portfolio',
  parameters: {
    layout: 'fullscreen',
  },
};

const samplePersonalInfo = {
  fullName: 'John Developer',
  email: 'john@example.com',
  phone: '+1 (555) 123-4567',
  linkedin: 'https://linkedin.com/in/johndeveloper',
  github: 'https://github.com/johndeveloper',
  location: {
    country: 'United States',
    city: 'San Francisco',
  },
  nationality: 'American',
  euCitizen: false,
};

const sampleIntroduction = 'Full-stack developer passionate about creating beautiful, functional web experiences with modern technologies and best practices.';

const samplePortfolioItems = [
  {
    name: 'E-Commerce Platform',
    link: 'https://github.com/example/ecommerce',
    description: 'Full-featured e-commerce platform built with Node.js and React, featuring user authentication, product management, shopping cart, and payment processing with Stripe.',
  },
  {
    name: 'Portfolio Website',
    link: 'https://github.com/example/portfolio',
    description: 'Responsive portfolio website built with vanilla JavaScript and CSS with mobile-first responsive design, Storybook integration, and automated GitHub Pages deployment.',
  },
  {
    name: 'Design System',
    link: 'https://github.com/example/design-system',
    description: 'Comprehensive design system with custom components, design tokens, and Storybook integration for consistent UI/UX across projects.',
  },
  {
    name: 'Mobile App',
    link: 'https://github.com/example/mobile-app',
    description: 'Cross-platform mobile application built with React Native for iOS and Android with offline sync and real-time notifications.',
  },
  {
    name: 'Data Visualization',
    link: 'https://github.com/example/data-viz',
    description: 'Interactive data visualization dashboard using D3.js and React to display analytics and metrics in real-time.',
  },
  {
    name: 'API Documentation',
    link: 'https://github.com/example/api-docs',
    description: 'Auto-generated API documentation with live code examples, interactive demos, and comprehensive guides for developers.',
  },
];

const createStoryDefault = () => ({
  render: () => {
    const container = document.createElement('div');
    container.style.minHeight = '100vh';

    const header = Header.render(samplePersonalInfo, sampleIntroduction);
    const personalCard = PersonalCard.render(samplePersonalInfo);
    const portfolioGrid = PortfolioGrid.render(samplePortfolioItems);

    container.appendChild(header);
    container.appendChild(personalCard);
    container.appendChild(portfolioGrid);

    return container;
  },
});

export const Default = createStoryDefault();
