import '../components/Header/Header.css';
import '../components/PersonalCard/PersonalCard.css';
import '../components/PortfolioGrid/PortfolioGrid.css';
import '../components/PortfolioCard/PortfolioCard.css';
import { Header } from '../components/Header/Header.js';
import { PersonalCard } from '../components/PersonalCard/PersonalCard.js';
import { PortfolioGrid } from '../components/PortfolioGrid/PortfolioGrid.js';

const headerData = {
  title: 'Richard Sallai',
  description: 'Hi, I\'m Richard — a full-stack developer with over 16 years of experience building web applications on both the frontend and backend. I love creating clean, reliable solutions, and I\'m especially passionate about automation and AI tools that make work smarter and more efficient.'
};

const personalInfo = {
  fullName: 'Richard Sallai',
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/richard-sallai-00483b74/' },
    { label: 'GitHub', url: 'https://github.com/apostx' },
    { label: 'Email', url: 'mailto:richard.sallai.87@gmail.com' }
  ],
  infoCards: [
    { label: 'Country', value: 'Germany' },
    { label: 'Nationality', value: 'Hungarian' },
    { label: 'EU Citizen', value: 'Yes' }
  ]
};

const portfolioItems = [
  { name: 'Project One', link: '#', description: 'A creative web application', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop' },
  { name: 'Project Two', link: '#', description: 'Data visualization dashboard', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop' },
  { name: 'Project Three', link: '#', description: 'Mobile app design', image: 'https://images.unsplash.com/photo-1512941691920-25beb53a6f3b?w=400&h=300&fit=crop' },
  { name: 'Project Four', link: '#', description: 'E-commerce platform', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop' },
  { name: 'Project Five', link: '#', description: 'API integration', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop' },
  { name: 'Project Six', link: '#', description: 'Cloud architecture', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop' }
];

const designs = [
  { id: '01', name: 'Dark Blue', file: 'design-01-masonry-dark-blue.css' },
  { id: '02', name: 'Slate Blue', file: 'design-02-masonry-slate-blue.css' },
  { id: '03', name: 'Navy Cyan', file: 'design-03-masonry-navy-cyan.css' },
  { id: '04', name: 'Charcoal Indigo', file: 'design-04-masonry-charcoal-indigo.css' },
  { id: '05', name: 'Deep Ocean', file: 'design-05-masonry-deep-ocean.css' },
  { id: '06', name: 'Midnight Periwinkle', file: 'design-06-masonry-midnight-periwinkle.css' },
  { id: '07', name: 'Ebony Azure', file: 'design-07-masonry-ebony-azure.css' },
  { id: '08', name: 'Graphite Denim', file: 'design-08-masonry-graphite-denim.css' },
  { id: '09', name: 'Shadow Sky', file: 'design-09-masonry-shadow-sky.css' },
  { id: '10', name: 'Green Masonry', file: 'design-09-image-masonry.css' },
  { id: '11', name: 'Glassmorphism', file: 'design-11-glassmorphism.css' },
  { id: '12', name: 'Neobrutalism', file: 'design-12-neobrutalism.css' },
  { id: '13', name: 'Bento Minimal', file: 'design-13-bento-minimal.css' },
  { id: '14', name: 'Aurora Mesh', file: 'design-14-aurora-mesh.css' },
  { id: '15', name: 'Editorial Mono', file: 'design-15-editorial-mono.css' }
];

const renderDesign = (designFile) => {
  // Remove any previously injected design stylesheets so themes don't bleed across stories
  document.querySelectorAll('link[data-design-showcase]').forEach((el) => el.remove());

  const design = document.createElement('link');
  design.rel = 'stylesheet';
  design.href = `/src/styles/designs/${designFile}`;
  design.setAttribute('data-design-showcase', 'true');
  document.head.appendChild(design);

  const container = document.createElement('div');
  container.style.cssText = 'width: 100%; margin: 0; padding: 0;';

  const header = Header.render(headerData, personalInfo);
  const personalCard = PersonalCard.render(personalInfo);
  const portfolioGrid = PortfolioGrid.render(portfolioItems);

  container.appendChild(header);
  container.appendChild(personalCard);
  container.appendChild(portfolioGrid);

  return container;
};

export default {
  title: 'Designs/Showcase',
  parameters: {
    layout: 'fullscreen'
  }
};

export const Design01DarkBlue = () => renderDesign('design-01-masonry-dark-blue.css');
export const Design02SlateBlue = () => renderDesign('design-02-masonry-slate-blue.css');
export const Design03NavyCyan = () => renderDesign('design-03-masonry-navy-cyan.css');
export const Design04CharcoalIndigo = () => renderDesign('design-04-masonry-charcoal-indigo.css');
export const Design05DeepOcean = () => renderDesign('design-05-masonry-deep-ocean.css');
export const Design06MidnightPeriwinkle = () => renderDesign('design-06-masonry-midnight-periwinkle.css');
export const Design07EbonyAzure = () => renderDesign('design-07-masonry-ebony-azure.css');
export const Design08GraphiteDenim = () => renderDesign('design-08-masonry-graphite-denim.css');
export const Design09ShadowSky = () => renderDesign('design-10-masonry-shadow-sky.css');
export const Design10GreenMasonry = () => renderDesign('design-09-image-masonry.css');
export const Design11Glassmorphism = () => renderDesign('design-11-glassmorphism.css');
export const Design12Neobrutalism = () => renderDesign('design-12-neobrutalism.css');
export const Design13BentoMinimal = () => renderDesign('design-13-bento-minimal.css');
export const Design14AuroraMesh = () => renderDesign('design-14-aurora-mesh.css');
export const Design15EditorialMono = () => renderDesign('design-15-editorial-mono.css');
