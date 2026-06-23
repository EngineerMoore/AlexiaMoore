import React from "react";
import TechIcon from "./TechIcon";
import "../styles/TechIconGrid.css";

interface TechIconGridProps {
  icons: string[];
}

interface IconPosition {
  x: number;
  y: number;
}

const iconPositions: Record<string, IconPosition> = {
  typescript: { x: 40, y: 190 },
  aws: { x: 160, y: 240 },
  claude: { x: 280, y: 180 },
  express: { x: 300, y: 70 },
  node: { x: 400, y: 240 },
  "socket-io": { x: 480, y: 160 },
  react: { x: 630, y: 100 },
  css: { x: 580, y: 240 },
  html: { x: -150, y: 500 },
  git: { x: 0, y: 550 },
  "vs-code": { x: 20, y: 407 },
  javascript: { x: 150, y: 493 },
  github: { x: 200, y: 400 },
  vite: { x: 300, y: 465 },
  figma: { x: 400, y: 400 },
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
              left: `${position.x}px`,
              top: `${position.y}px`,
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
