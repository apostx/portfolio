import type { Meta, StoryObj } from '@storybook/react';
import { PortfolioGrid } from './PortfolioGrid';

const meta: Meta<typeof PortfolioGrid> = {
  title: 'Components/PortfolioGrid',
  component: PortfolioGrid,
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj<typeof PortfolioGrid>;

export const WithItems: Story = {
  args: {
    items: [
      {
        name: 'E-Commerce Platform',
        link: 'https://example.com/1',
        description:
          'Full-featured e-commerce platform with payment processing and user authentication.',
        image: '',
      },
      {
        name: 'Portfolio Website',
        link: 'https://example.com/2',
        description:
          'Responsive portfolio built with vanilla JS and CSS with mobile-first design.',
        image: '',
      },
      {
        name: 'Design System',
        link: 'https://example.com/3',
        description:
          'Comprehensive design system with custom components and Storybook integration.',
        image: '',
      },
      {
        name: 'Mobile App',
        link: 'https://example.com/4',
        description: 'Cross-platform mobile application built with React Native.',
        image: '',
      },
    ],
  },
};

export const EmptyState: Story = {
  args: { items: [] },
};

export const SingleItem: Story = {
  args: {
    items: [
      {
        name: 'My Project',
        link: 'https://example.com',
        description: 'A sample project.',
        image: '',
      },
    ],
  },
};
