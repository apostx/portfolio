export class ConfigService {
  static async load() {
    try {
      const response = await fetch('./config.json');
      if (!response.ok) {
        throw new Error('Failed to load config.json');
      }
      const config = await response.json();
      return config;
    } catch (error) {
      console.error('Error loading config:', error);
      throw error;
    }
  }
}
