import React from "react";
import ProjectItem from "./ProjectItem";
import project1Img from "../public/assets/projects/project1.png";
import project2Img from "../public/assets/projects/project2.png";
import project3Img from "../public/assets/projects/project3.png";
import comingsoonImg from "../public/assets/coming-soon.jpg";

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
            backgroundImg="C:\Users\Peam\Documents\Programming\Peam Jo Portfolio Website\portfolio\public\assets\projects\project4.png"
            projectUrl="/property4"
          />
          <ProjectItem
            title="Event Driven Architecture"
            backgroundImg="C:\Users\Peam\Documents\Programming\Peam Jo Portfolio Website\portfolio\public\assets\projects\project6.png"
            projectUrl="/property6"
          />
          <ProjectItem
            title="Deploy a Wordpress Website on AWS"
            backgroundImg={project1Img}
            projectUrl="/property1"
          />
          <ProjectItem
            title="LevelUp! Lab for Serverless"
            backgroundImg="C:\Users\Peam\Documents\Programming\Peam Jo Portfolio Website\portfolio\public\assets\projects\project5.jpg"
            projectUrl="/property5"
          />
          <ProjectItem
            title="Build a Serverless Web Application"
            backgroundImg={project2Img}
            projectUrl="/property2"
          />
          <ProjectItem
            title="Using Terraform to build a Dev Environment"
            backgroundImg={project3Img}
            projectUrl="/property3"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
