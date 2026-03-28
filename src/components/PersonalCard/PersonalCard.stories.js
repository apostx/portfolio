import '../../../src/components/PersonalCard/PersonalCard.css';
import { PersonalCard } from '../../../src/components/PersonalCard/PersonalCard.js';

export default {
  title: 'Components/PersonalCard',
  component: PersonalCard,
  parameters: {
    layout: 'fullscreen',
  },
};

export const FullInfo = {
  render: () => {
    const personalInfo = {
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      location: {
        country: 'United States',
        city: 'San Francisco',
      },
      nationality: 'American',
      euCitizen: false,
    };
    return PersonalCard.render(personalInfo);
  },
};

export const PartialInfo = {
  render: () => {
    const personalInfo = {
      email: 'contact@example.com',
      github: 'https://github.com/example',
      location: {
        country: 'Canada',
        city: null,
      },
    };
    return PersonalCard.render(personalInfo);
  },
};

export const MinimalInfo = {
  render: () => {
    const personalInfo = {
      email: 'hello@example.com',
    };
    return PersonalCard.render(personalInfo);
  },
};

export const Empty = {
  render: () => {
    const personalInfo = {};
    const section = document.createElement('section');
    section.style.padding = '3rem 1rem';
    section.innerHTML = '<p style="text-align: center; color: #999;">No personal information provided</p>';
    return section;
  },
};
