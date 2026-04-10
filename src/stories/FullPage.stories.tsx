import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/Header/Header';
import { PersonalCard } from '../components/PersonalCard/PersonalCard';
import { PortfolioGrid } from '../components/PortfolioGrid/PortfolioGrid';
import type { PortfolioItem } from '../services/SheetsService';

const samplePersonalInfo = {
  fullName: 'John Developer',
  links: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/johndeveloper' },
    { label: 'GitHub', url: 'https://github.com/johndeveloper' },
    { label: 'Email', url: 'mailto:john@example.com' },
  ],
  infoCards: [
    { label: 'Country', value: 'United States' },
    { label: 'Nationality', value: 'American' },
    { label: 'EU Citizen', value: 'No' },
  ],
};

const sampleHeader = {
  title: 'John Developer',
  description:
    'Full-stack developer passionate about creating beautiful, functional web experiences with modern technologies and best practices.',
};

const samplePortfolioItems: PortfolioItem[] = [
  {
    name: 'E-Commerce Platform',
    link: 'https://github.com/example/ecommerce',
    description:
      'Full-featured e-commerce platform built with Node.js and React, featuring user authentication, product management, shopping cart, and payment processing with Stripe.',
    image: '',
  },
  {
    name: 'Portfolio Website',
    link: 'https://github.com/example/portfolio',
    description:
      'Responsive portfolio website built with React and TypeScript, with mobile-first responsive design, Storybook integration, and automated GitHub Pages deployment.',
    image: '',
  },
  {
    name: 'Design System',
    link: 'https://github.com/example/design-system',
    description:
      'Comprehensive design system with custom components, design tokens, and Storybook integration for consistent UI/UX across projects.',
    image: '',
  },
  {
    name: 'Mobile App',
    link: 'https://github.com/example/mobile-app',
    description:
      'Cross-platform mobile application built with React Native for iOS and Android with offline sync and real-time notifications.',
    image: '',
  },
  {
    name: 'Data Visualization',
    link: 'https://github.com/example/data-viz',
    description:
      'Interactive data visualization dashboard using D3.js and React to display analytics and metrics in real-time.',
    image: '',
  },
  {
    name: 'API Documentation',
    link: 'https://github.com/example/api-docs',
    description:
      'Auto-generated API documentation with live code examples, interactive demos, and comprehensive guides for developers.',
    image: '',
  },
];

function FullPortfolio() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header header={sampleHeader} personalInfo={samplePersonalInfo} />
      <PersonalCard personalInfo={samplePersonalInfo} />
      <PortfolioGrid items={samplePortfolioItems} />
    </div>
  );
}

const meta: Meta<typeof FullPortfolio> = {
  title: 'Pages/Full Portfolio',
  component: FullPortfolio,
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj<typeof FullPortfolio>;

export const Default: Story = {};
