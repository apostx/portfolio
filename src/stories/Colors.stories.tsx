import type { Meta, StoryObj } from '@storybook/react';

const TOKENS = [
  '--color-primary',
  '--color-primary-dark',
  '--color-primary-light',
  '--color-on-primary',
  '--color-background',
  '--color-background-alt',
  '--color-surface',
  '--color-text',
  '--color-text-secondary',
  '--color-heading',
  '--color-border',
];

function ColorTokens() {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
      <h1 style={{ marginBottom: '2rem' }}>Theme Color Tokens</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {TOKENS.map((token) => (
          <div
            key={token}
            style={{
              padding: '1rem',
              borderRadius: '8px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ marginBottom: '0.5rem', fontSize: '0.85rem', fontFamily: 'monospace' }}>
              {token}
            </h3>
            <div
              style={{
                height: '60px',
                borderRadius: '4px',
                background: `var(${token})`,
                border: '1px solid rgba(0,0,0,0.08)',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const meta: Meta<typeof ColorTokens> = {
  title: 'Design System/Colors',
  component: ColorTokens,
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj<typeof ColorTokens>;

export const AllTokens: Story = {};
