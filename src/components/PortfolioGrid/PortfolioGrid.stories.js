import '../../../src/components/PortfolioGrid/PortfolioGrid.css';
import { PortfolioGrid } from '../../../src/components/PortfolioGrid/PortfolioGrid.js';

export default {
  title: 'Components/PortfolioGrid',
  component: PortfolioGrid,
  parameters: {
    layout: 'fullscreen',
  },
};

export const WithItems = {
  render: () => {
    const items = [
      {
        name: 'E-Commerce Platform',
        link: 'https://example.com/1',
        description: 'Full-featured e-commerce platform with payment processing and user authentication.',
      },
      {
        name: 'Portfolio Website',
        link: 'https://example.com/2',
        description: 'Responsive portfolio built with vanilla JS and CSS with mobile-first design.',
      },
      {
        name: 'Design System',
        link: 'https://example.com/3',
        description: 'Comprehensive design system with custom components and Storybook integration.',
      },
      {
        name: 'Mobile App',
        link: 'https://example.com/4',
        description: 'Cross-platform mobile application built with React Native.',
      },
    ];
    return PortfolioGrid.render(items);
  },
};

export const EmptyState = {
  render: () => {
    return PortfolioGrid.render([]);
  },
};

export const SingleItem = {
  render: () => {
    const items = [
      {
        name: 'My Project',
        link: 'https://example.com',
        description: 'A sample project.',
      },
    ];
    return PortfolioGrid.render(items);
  },
};
