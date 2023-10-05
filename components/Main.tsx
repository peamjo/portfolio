import Link from 'next/link'
import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export const Main = () => {
  return (
    <div id="home" className="w-full text-center pt-28 bg-cloud">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-widest text-gray-600 uppercase"></p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Peam Jo</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            Cloud Engineer/Solutions Architect
          </h1>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-6">
            <Link
              href="https://www.linkedin.com/in/peamjo/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href="https://github.com/peamjo"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <FaGithub />
              </div>
            </Link>
            <Link
              href="../assets/resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main
