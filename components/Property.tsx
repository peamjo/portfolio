import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { StringLiteral } from "typescript";

interface PropertyProps {
  title: string;
  tech_all: string;
  overview: string;
  background: any;
  demo: string;
  tech_list: Array<string>;
}

const Property = ({
  title,
  tech_all,
  overview,
  background,
  demo,
  tech_list,
}: PropertyProps) => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={background}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{title}</h2>
          <h3>{tech_all}</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="py-2 my-2">Overview</h2>
          <p className="mb-6">{overview}</p>
          <Link
            className="px-8 py-2 mt-4 mr-2 shadow-xl shadow-gray-400 rounded-xl 
    uppercase bg-gradient-to-r from-[#5651e5] to-[#7090ff] text-white cursor-pointer"
            href={demo}
          >
            Media Demo
          </Link>
          <div className="mt-8">
            <Link
              className="px-8 py-2 shadow-xl shadow-gray-400 rounded-xl 
    uppercase bg-gradient-to-r from-[#e43629] to-[#ffa970] text-white cursor-pointer"
              href="/#projects"
            >
              Back
            </Link>
          </div>
        </div>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl max-h-28">
          <p className="pb-2 font-bold text-center">Technologies</p>
          <div className="grid grid-cols-3 md:grid-cols-1">
            {tech_list.map((i) => (
              <p className="flex items-center py-2 text-gray-600" key={i}>
                <RiRadioButtonFill className="mr-1" />
                {i}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
