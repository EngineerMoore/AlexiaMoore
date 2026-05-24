import React from 'react';
import TechIcon from './TechIcon';
import '../styles/TechIconGrid.css';

interface TechIconGridProps {
  icons: string[];
}

interface IconPosition {
  x: number;
  y: number;
}

const iconPositions: Record<string, IconPosition> = {
  typescript: { x: 404.86, y: 156.94 },
  aws: { x: 587, y: 158 },
  node: { x: 754, y: 175 },
  express: { x: 697, y: 58 },
  'socket-io': { x: 878, y: 140 },
  react: { x: 1011, y: 54 },
  css: { x: 1000, y: 217 },
  vite: { x: 755, y: 465 },
  'vs-code': { x: 293, y: 407 },
  git: { x: 435, y: 444 },
  javascript: { x: 579, y: 493 },
  github: { x: 658, y: 368 },
  figma: { x: 857, y: 350 },
  html: { x: 303, y: 549 }
};

const TechIconGrid: React.FC<TechIconGridProps> = ({ icons }) => {
  return (
    <div className="tech-icon-grid">
      {icons.map((icon) => {
        const position = iconPositions[icon];
        if (!position) return null;

        return (
          <div
            key={icon}
            className="tech-icon-wrapper"
            style={{
              position: 'absolute',
              left: `${position.x}px`,
              top: `${position.y}px`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <TechIcon iconName={icon} alt={icon} />
          </div>
        );
      })}
    </div>
  );
};

export default TechIconGrid;
