export interface HeaderConfig {
  title: string;
  description: string;
}

export interface PersonalLink {
  label: string;
  url: string;
}

export interface InfoCard {
  label: string;
  value: string;
}

export interface PersonalInfo {
  fullName: string;
  links: PersonalLink[];
  infoCards: InfoCard[];
}

export interface SheetsParams {
  sheet: string;
  headers: number;
}

export interface AppConfig {
  sheetsUrl: string;
  sheetsParams: SheetsParams;
  header: HeaderConfig;
  personalInfo: PersonalInfo;
  theme: string;
}

export class ConfigService {
  static async load(): Promise<AppConfig> {
    const response = await fetch('./config.json');
    if (!response.ok) {
      throw new Error('Failed to load config.json');
    }
    return (await response.json()) as AppConfig;
  }
}
