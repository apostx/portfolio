import type { PersonalInfo } from '../../services/ConfigService';
import './PersonalCard.css';

interface PersonalCardProps {
  personalInfo: PersonalInfo;
}

export function PersonalCard({ personalInfo }: PersonalCardProps) {
  const cards = personalInfo?.infoCards ?? [];

  return (
    <section className="personal-card-section">
      <div className="container">
        <div className="personal-card">
          {cards.map(({ label, value }) =>
            value ? (
              <div className="personal-field" key={label}>
                <strong>{label}:</strong>
                <span>{value}</span>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
