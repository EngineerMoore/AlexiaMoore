import React from "react";
import TechIcon from "./TechIcon";
import "../styles/TechIconGrid.css";

interface TechIconGridProps {
  icons: string[];
}

const TechIconGrid: React.FC<TechIconGridProps> = ({ icons }) => {
  return (
    <article className="tech-icon-grid">
      <ul className="tech-icon-list">
        <h1 className="projects-header">FULLSTACK PROJECTS</h1>
        {icons.map((icon) => {
          return (
            <li className={`tech-icon-container + ${icon}-icon`} key={icon}>
              <TechIcon iconName={icon} alt={icon} />
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default TechIconGrid;
