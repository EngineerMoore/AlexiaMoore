import React from 'react';
import '../styles/TechIcon.css';

interface TechIconProps {
  iconName: string;
  alt: string;
}

const TechIcon: React.FC<TechIconProps> = ({ iconName, alt }) => {
  const iconUrl = new URL(`../assets/${iconName}.svg`, import.meta.url).href;

  return <img src={iconUrl} alt={alt} />;
};

export default TechIcon;
