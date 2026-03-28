import '../../../src/components/PortfolioCard/PortfolioCard.css';
import { PortfolioCard } from '../../../src/components/PortfolioCard/PortfolioCard.js';

export default {
  title: 'Components/PortfolioCard',
  component: PortfolioCard,
  parameters: {
    layout: 'padded',
  },
};

export const Standard = {
  render: () => {
    const item = {
      name: 'E-Commerce Platform',
      link: 'https://example.com/project1',
      description: 'A full-featured e-commerce platform built with Node.js and React, featuring user authentication, product management, and payment processing.',
    };
    return PortfolioCard.render(item);
  },
};

export const NoLink = {
  render: () => {
    const item = {
      name: 'Design System',
      description: 'Clean component design system with responsive mobile-first approach.',
    };
    return PortfolioCard.render(item);
  },
};

export const ShortDescription = {
  render: () => {
    const item = {
      name: 'Mobile App',
      link: 'https://example.com/app',
      description: 'React Native application.',
    };
    return PortfolioCard.render(item);
  },
};
