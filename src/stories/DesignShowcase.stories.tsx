// Note: component CSS is intentionally NOT imported here. Each design file in
// src/styles/designs/ is self-contained and defines all layout/card/header
// styling from scratch. Importing component CSS would add a baseline layer
// that bleeds through and flattens the visual differences between designs.
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/Header/Header';
import { PersonalCard } from '../components/PersonalCard/PersonalCard';
import { PortfolioGrid } from '../components/PortfolioGrid/PortfolioGrid';
import { useTheme } from '../hooks/useTheme';
import type { PortfolioItem } from '../services/SheetsService';

const headerData = {
  title: 'Richard Sallai',
  description:
    "Hi, I'm Richard — a full-stack developer with over 16 years of experience building web applications on both the frontend and backend. I love creating clean, reliable solutions, and I'm especially passionate about automation and AI tools that make work smarter and more efficient.",
};

const personalInfo = {
  fullName: 'Richard Sallai',
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/richard-sallai-00483b74/' },
    { label: 'GitHub', url: 'https://github.com/apostx' },
    { label: 'Email', url: 'mailto:richard.sallai.87@gmail.com' },
  ],
  infoCards: [
    { label: 'Country', value: 'Germany' },
    { label: 'Nationality', value: 'Hungarian' },
    { label: 'EU Citizen', value: 'Yes' },
  ],
};

const portfolioItems: PortfolioItem[] = [
  {
    name: 'Project One',
    link: '#',
    description: 'A creative web application',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
  },
  {
    name: 'Project Two',
    link: '#',
    description: 'Data visualization dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
  },
  {
    name: 'Project Three',
    link: '#',
    description: 'Mobile app design',
    image: 'https://images.unsplash.com/photo-1512941691920-25beb53a6f3b?w=400&h=300&fit=crop',
  },
  {
    name: 'Project Four',
    link: '#',
    description: 'E-commerce platform',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  },
  {
    name: 'Project Five',
    link: '#',
    description: 'API integration',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
  },
  {
    name: 'Project Six',
    link: '#',
    description: 'Cloud architecture',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
  },
];

interface DesignProps {
  designFile: string;
}

function DesignFrame({ designFile }: DesignProps) {
  useTheme(designFile);
  return (
    <div style={{ width: '100%', margin: 0, padding: 0 }}>
      <Header header={headerData} personalInfo={personalInfo} />
      <PersonalCard personalInfo={personalInfo} />
      <PortfolioGrid items={portfolioItems} />
    </div>
  );
}

const meta: Meta<typeof DesignFrame> = {
  title: 'Designs/Showcase',
  component: DesignFrame,
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj<typeof DesignFrame>;

const make = (designFile: string): Story => ({ args: { designFile } });

export const Design01DarkBlue = make('design-01-masonry-dark-blue');
export const Design02SlateBlue = make('design-02-masonry-slate-blue');
export const Design03NavyCyan = make('design-03-masonry-navy-cyan');
export const Design04CharcoalIndigo = make('design-04-masonry-charcoal-indigo');
export const Design05DeepOcean = make('design-05-masonry-deep-ocean');
export const Design06MidnightPeriwinkle = make('design-06-masonry-midnight-periwinkle');
export const Design07EbonyAzure = make('design-07-masonry-ebony-azure');
export const Design08GraphiteDenim = make('design-08-masonry-graphite-denim');
export const Design09ShadowSky = make('design-10-masonry-shadow-sky');
export const Design10GreenMasonry = make('design-09-image-masonry');
export const Design11Glassmorphism = make('design-11-glassmorphism');
export const Design12Neobrutalism = make('design-12-neobrutalism');
export const Design13BentoMinimal = make('design-13-bento-minimal');
export const Design14AuroraMesh = make('design-14-aurora-mesh');
export const Design15EditorialMono = make('design-15-editorial-mono');
