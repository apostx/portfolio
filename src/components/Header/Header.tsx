import { Fragment } from 'react';
import type { HeaderConfig, PersonalInfo } from '../../services/ConfigService';
import './Header.css';

interface HeaderProps {
  header: HeaderConfig;
  personalInfo: PersonalInfo;
}

export function Header({ header, personalInfo }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {header?.title && <h1>{header.title}</h1>}
          {header?.description && <p className="header-intro">{header.description}</p>}

          {personalInfo?.links && personalInfo.links.length > 0 && (
            <div className="header-links">
              {personalInfo.links.map((link, index) => (
                <Fragment key={link.url}>
                  {index > 0 && ' • '}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="header-link"
                  >
                    {link.label}
                  </a>
                </Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
