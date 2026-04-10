import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj<typeof Header>;

const sampleLinks = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/example/' },
  { label: 'GitHub', url: 'https://github.com/example' },
  { label: 'Email', url: 'mailto:hello@example.com' },
];

const sampleInfoCards = [
  { label: 'Country', value: 'Germany' },
  { label: 'Nationality', value: 'Hungarian' },
  { label: 'EU Citizen', value: 'Yes' },
];

export const WithNameAndIntro: Story = {
  args: {
    header: {
      title: 'John Doe',
      description: 'Full-stack developer passionate about creating beautiful web experiences.',
    },
    personalInfo: { fullName: 'John Doe', links: sampleLinks, infoCards: sampleInfoCards },
  },
};

export const NameOnly: Story = {
  args: {
    header: { title: 'Jane Smith', description: '' },
    personalInfo: { fullName: 'Jane Smith', links: [], infoCards: [] },
  },
};

export const IntroOnly: Story = {
  args: {
    header: { title: '', description: 'Web designer and creative developer.' },
    personalInfo: { fullName: '', links: [], infoCards: [] },
  },
};
