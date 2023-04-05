import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const SkillsItem = ({
  skill,
  skillImg,
  skillUrl,
}: {
  skill: string;
  skillImg: any;
  skillUrl: any;
}) => {
  return (
    <Link href={skillUrl} rel="noopener noreferrer" target="_blank">
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image src={skillImg} alt="/" width="65" height="65" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>{skill}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SkillsItem;
