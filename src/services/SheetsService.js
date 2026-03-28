export class SheetsService {
  /**
   * Fetches portfolio items from Google Sheets
   * Expected Google Sheets structure (column order):
   * 1. Project Name (text)
   * 2. Description (text)
   * 3. Project Link (URL)
   * 4. Image (URL or base64 data)
   * 
   * All fields are optional - only the row name is required to create a card
   * Rows without a name are skipped
   */
  static async fetchPortfolioItems(config) {
    try {
      const { sheetsUrl, sheetsParams } = config;
      
      // Build CSV export URL
      const csvUrl = `${sheetsUrl}&sheet=${encodeURIComponent(sheetsParams.sheet)}&headers=${sheetsParams.headers}&tqx=out:csv`;
      
      const response = await fetch(csvUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch from Google Sheets: ${response.status}`);
      }

      const csv = await response.text();
      const items = this.parseCSV(csv);
      
      return items;
    } catch (error) {
      console.error('Error fetching portfolio items:', error);
      return [];
    }
  }

  static parseCSV(csv) {
    const lines = csv.trim().split('\n');
    
    if (lines.length < 1) return [];

    const items = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      // Simple CSV parsing (handles quoted values)
      const parts = this.parseCSVLine(line);
      
      // Support 1-4 columns: name, description, link, image
      // All fields are optional
      if (parts.length >= 1 && parts[0]) {
        items.push({
          name: parts[0] || '',
          description: parts[1] || '',
          link: parts[2] || '',
          image: parts[3] || '',
        });
      }
    }

    return items;
  }

  static parseCSVLine(line) {
    const result = [];
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
