import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export const Main = () => {
  return (
    <div id="home" className="w-full md:h-[40vh] pt-32 text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600"></p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Peam Jo</span>.
          </h1>
          <h1 className="py-2 text-gray-700">A Cloud Engineer</h1>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-6">
            <Link
              href="https://www.linkedin.com/in/peamjo/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className=" bg-[#b4b4b4] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href="https://github.com/peamjo"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/#resume" rel="noopener noreferrer" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
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
