import React from "react";
import ProjectItem from "./ProjectItem";
import * as ProjectsList from "./ProjectsList";
import project1Img from "../public/assets/projects/project1.png";
import project2Img from "../public/assets/projects/project2.png";
import project3Img from "../public/assets/projects/project3.png";
import project4Img from "../public/assets/projects/project4.png";
import project5Img from "../public/assets/projects/project5.jpg";
import project6Img from "../public/assets/projects/project6.png";


const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1400px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2>What I&apos;ve Built</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectItem
            title="Jenkins Demo"
            backgroundImg={project4Img}
            projectUrl="/projects/jenkins"
          />
          <ProjectItem
            title="Event Driven Architecture"
            backgroundImg={project6Img}
            projectUrl="/projects/event-driven-architecture"
          />
          <ProjectItem
            title="Deploy a Wordpress Website on AWS"
            backgroundImg={project1Img}
            projectUrl="/projects/wordpress"
          />
          <ProjectItem
            title="LevelUp! Lab for Serverless"
            backgroundImg={project5Img}
            projectUrl="/projects/serverless"
          />
          <ProjectItem
            title="Build a Serverless Web Application"
            backgroundImg={project2Img}
            projectUrl="/projects/web-app"
          />
          <ProjectItem
            title="Using Terraform to build a Dev Environment"
            backgroundImg={project3Img}
            projectUrl="/projects/terraform"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
