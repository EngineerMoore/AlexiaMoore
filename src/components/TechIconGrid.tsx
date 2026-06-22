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
  typescript: { x: 350, y: 200 },
  aws: { x: 547, y: 158 },
  node: { x: 894, y: 175 },
  express: { x: 697, y: 58 },
  "socket-io": { x: 1090, y: 60 },
  react: { x: 697, y: 230 },
  css: { x: 1080, y: 200 },
  vite: { x: 850, y: 465 },
  "vs-code": { x: 250, y: 500 },
  git: { x: 435, y: 550 },
  javascript: { x: 600, y: 493 },
  github: { x: 738, y: 580 },
  figma: { x: 1060, y: 350 },
  html: { x: 90, y: 590 },
  claude: { x: 300, y: 690 },
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
