import React from "react";
import ProjectItem from "./ProjectItem";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";

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
            title="Deploy a Wordpress Website on AWS"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Build a Serverless Web Application"
            backgroundImg={cryptoImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Using Terraform to build a Dev Environment"
            backgroundImg={netflixImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Coming Soon..."
            backgroundImg={twitchImg}
            projectUrl="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
