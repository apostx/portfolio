import type { AppConfig } from './ConfigService';

export interface PortfolioItem {
  name: string;
  description: string;
  link: string;
  image: string;
}

export class SheetsService {
  /**
   * Fetches portfolio items from Google Sheets.
   * Expected column order: name, description, link, image. All optional except name.
   */
  static async fetchPortfolioItems(config: AppConfig): Promise<PortfolioItem[]> {
    try {
      const { sheetsUrl, sheetsParams } = config;
      const csvUrl = `${sheetsUrl}&sheet=${encodeURIComponent(sheetsParams.sheet)}&headers=${sheetsParams.headers}&tqx=out:csv`;

      const response = await fetch(csvUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch from Google Sheets: ${response.status}`);
      }

      const csv = await response.text();
      return this.parseCSV(csv);
    } catch (error) {
      console.error('Error fetching portfolio items:', error);
      return [];
    }
  }

  static parseCSV(csv: string): PortfolioItem[] {
    const lines = csv.trim().split('\n');
    if (lines.length < 1) return [];

    const items: PortfolioItem[] = [];
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line) continue;

      const parts = this.parseCSVLine(line);
      if (parts.length >= 1 && parts[0]) {
        items.push({
          name: parts[0] ?? '',
          description: parts[1] ?? '',
          link: parts[2] ?? '',
          image: parts[3] ?? '',
        });
      }
    }
    return items;
  }

  static parseCSVLine(line: string): string[] {
    const result: string[] = [];
    let current = '';
    let insideQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const nextChar = line[i + 1];

      if (char === '"') {
        if (insideQuotes && nextChar === '"') {
          current += '"';
          i++;
        } else {
          insideQuotes = !insideQuotes;
        }
      } else if (char === ',' && !insideQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }

    result.push(current.trim());
    return result;
  }
}
