export class PersonalCard {
  static render(personalInfo) {
    const section = document.createElement('section');
    section.className = 'personal-card-section';

    const container = document.createElement('div');
    container.className = 'container';

    const card = document.createElement('div');
    card.className = 'personal-card';

    // Use the infoCards array from config
    if (personalInfo?.infoCards && Array.isArray(personalInfo.infoCards)) {
      personalInfo.infoCards.forEach(({ label, value }) => {
        if (value) {
          const field = document.createElement('div');
          field.className = 'personal-field';

          const labelEl = document.createElement('strong');
          labelEl.textContent = label + ':';
          field.appendChild(labelEl);

          const valueEl = document.createElement('span');
          valueEl.textContent = value;
          field.appendChild(valueEl);

          card.appendChild(field);
        }
      });
    }

    container.appendChild(card);
    section.appendChild(container);

    return section;
  }
}
