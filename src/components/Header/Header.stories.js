import '../../../src/components/Header/Header.css';
import { Header } from '../../../src/components/Header/Header.js';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
};

export const WithNameAndIntro = {
  render: () => {
    const personalInfo = {
      fullName: 'John Doe',
    };
    const introduction = 'Full-stack developer passionate about creating beautiful web experiences.';
    return Header.render(personalInfo, introduction);
  },
};

export const NameOnly = {
  render: () => {
    const personalInfo = {
      fullName: 'Jane Smith',
    };
    return Header.render(personalInfo, null);
  },
};

export const IntroOnly = {
  render: () => {
    const personalInfo = {};
    const introduction = 'Web designer and creative developer.';
    return Header.render(personalInfo, introduction);
  },
};

export const Empty = {
  render: () => {
    const personalInfo = {};
    return Header.render(personalInfo, null);
  },
};
