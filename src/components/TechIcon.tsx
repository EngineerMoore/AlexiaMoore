import React from 'react';
import '../styles/TechIcon.css';

interface TechIconProps {
  iconName: string;
  alt: string;
}

const TechIcon: React.FC<TechIconProps> = ({ iconName, alt }) => {
  const iconUrl = new URL(`../assets/${iconName}.svg`, import.meta.url).href;

  return (
    <div className="tech-icon-container">
      <img src={iconUrl} alt={alt} />
    </div>
  );
};

export default TechIcon;
