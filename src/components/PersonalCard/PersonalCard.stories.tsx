import type { Meta, StoryObj } from '@storybook/react';
import { PersonalCard } from './PersonalCard';

const meta: Meta<typeof PersonalCard> = {
  title: 'Components/PersonalCard',
  component: PersonalCard,
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj<typeof PersonalCard>;

export const FullInfo: Story = {
  args: {
    personalInfo: {
      fullName: 'John Doe',
      links: [],
      infoCards: [
        { label: 'Country', value: 'United States' },
        { label: 'Nationality', value: 'American' },
        { label: 'EU Citizen', value: 'No' },
      ],
    },
  },
};

export const PartialInfo: Story = {
  args: {
    personalInfo: {
      fullName: '',
      links: [],
      infoCards: [
        { label: 'Country', value: 'Canada' },
        { label: 'Nationality', value: '' },
      ],
    },
  },
};

export const Empty: Story = {
  args: {
    personalInfo: { fullName: '', links: [], infoCards: [] },
  },
};
