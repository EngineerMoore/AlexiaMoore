import React from "react";
import "../styles/ProjectCard.css";

interface ProjectCardProps {
  title: string;
  description: string;
  coverImage: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  coverImage,
}) => {
  const imageUrl = new URL(`../assets/${coverImage}`, import.meta.url).href;

  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-card-image" />
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
