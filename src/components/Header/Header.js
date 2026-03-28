export class Header {
  static render(header, personalInfo) {
    const headerEl = document.createElement('header');
    headerEl.className = 'header';

    const container = document.createElement('div');
    container.className = 'container';

    const content = document.createElement('div');
    content.className = 'header-content';

    if (header?.title) {
      const h1 = document.createElement('h1');
      h1.textContent = header.title;
      content.appendChild(h1);
    }

    if (header?.description) {
      const p = document.createElement('p');
      p.className = 'header-intro';
      p.textContent = header.description;
      content.appendChild(p);
    }

    // Add social links from personalInfo.links array
    const linksDiv = document.createElement('div');
    linksDiv.className = 'header-links';

    if (personalInfo?.links && personalInfo.links.length > 0) {
      personalInfo.links.forEach((link, index) => {
        if (index > 0) {
          const separator = document.createTextNode(' • ');
          linksDiv.appendChild(separator);
        }
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.label;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'header-link';
        linksDiv.appendChild(a);
      });

      content.appendChild(linksDiv);
    }

    container.appendChild(content);
    headerEl.appendChild(container);

    return headerEl;
  }
}
