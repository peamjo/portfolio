import React from 'react';
import Image from 'next/image';
import SkillsItem from './SkillsItem';

const Skills = () => {
  /** lg:h-screen */
  return (
    <div id="skills" className="w-full p-2">
      {" "}
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2>What I Can Do</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols4">
          <SkillsItem
            skill="Amazon Web Services"
            skillImg="/../public/assets/skills/aws.png"
            skillUrl="https://aws.amazon.com/"
          />
          <SkillsItem
            skill="Kubernetes"
            skillImg="/../public/assets/skills/kubernetes.png"
            skillUrl="https://kubernetes.io/"
          />
          <SkillsItem
            skill="Docker"
            skillImg="/../public/assets/skills/docker.png"
            skillUrl="https://www.docker.com/"
          />
          <SkillsItem
            skill="HTML"
            skillImg="/../public/assets/skills/html.png"
            skillUrl="https://en.wikipedia.org/wiki/HTML"
          />
          <SkillsItem
            skill="CSS"
            skillImg="/../public/assets/skills/css.png"
            skillUrl="https://en.wikipedia.org/wiki/CSS"
          />
          <SkillsItem
            skill="Javascript"
            skillImg="/../public/assets/skills/javascript.png"
            skillUrl="https://en.wikipedia.org/wiki/JavaScript"
          />
          <SkillsItem
            skill="React"
            skillImg="/../public/assets/skills/react.png"
            skillUrl="https://react.dev/"
          />
          <SkillsItem
            skill="Next.js"
            skillImg="/../public/assets/skills/nextjs.png"
            skillUrl="https://nextjs.org/"
          />
          <SkillsItem
            skill="Tailwind"
            skillImg="/../public/assets/skills/tailwind.png"
            skillUrl="https://tailwindcss.com/"
          />
          <SkillsItem
            skill="Python"
            skillImg="/../public/assets/skills/python.png"
            skillUrl="https://www.python.org/"
          />
          <SkillsItem
            skill="GitHub"
            skillImg="/../public/assets/skills/github1.png"
            skillUrl="https://www.github.com/peamjo"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
