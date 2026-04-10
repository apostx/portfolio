import type { Meta, StoryObj } from '@storybook/react';
import { PortfolioCard } from './PortfolioCard';

const meta: Meta<typeof PortfolioCard> = {
  title: 'Components/PortfolioCard',
  component: PortfolioCard,
  parameters: { layout: 'padded' },
};

export default meta;

type Story = StoryObj<typeof PortfolioCard>;

export const Standard: Story = {
  args: {
    item: {
      name: 'E-Commerce Platform',
      link: 'https://example.com/project1',
      description:
        'A full-featured e-commerce platform built with Node.js and React, featuring user authentication, product management, and payment processing.',
      image: '',
    },
  },
};

export const NoLink: Story = {
  args: {
    item: {
      name: 'Design System',
      link: '',
      description: 'Clean component design system with responsive mobile-first approach.',
      image: '',
    },
  },
};

export const ShortDescription: Story = {
  args: {
    item: {
      name: 'Mobile App',
      link: 'https://example.com/app',
      description: 'React Native application.',
      image: '',
    },
  },
};
