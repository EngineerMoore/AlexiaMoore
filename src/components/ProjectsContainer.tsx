import React, { useState, useEffect, useRef } from "react";
import TechIconGrid from "./TechIconGrid";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";
import "../styles/ProjectsContainer.css";

const allIcons = [
  "typescript",
  "aws",
  "node",
  "express",
  "socket-io",
  "react",
  "css",
  "vite",
  "vs-code",
  "git",
  "javascript",
  "github",
  "figma",
  "html",
  "claude",
];

const ProjectsContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasSplattered, setHasSplattered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasSplattered) {
            setHasSplattered(true);
            if (containerRef.current) {
              containerRef.current.classList.add("splatter");
            }
          }
        });
      },
      { threshold: 0.3 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasSplattered]);

  return (
    <>
      <div ref={containerRef} className="projects-container" id="projects">
        <h1 className="projects-header">FULLSTACK PROJECTS</h1>

        <TechIconGrid icons={allIcons} />

        <div className="project-card-wrapper upper-left">
          <ProjectCard
            title={projectsData[0].title}
            description={projectsData[0].description}
            coverImage={projectsData[0].coverImage}
          />
        </div>

        <div className="project-card-wrapper lower-right">
          <ProjectCard
            title={projectsData[1].title}
            description={projectsData[1].description}
            coverImage={projectsData[1].coverImage}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectsContainer;
