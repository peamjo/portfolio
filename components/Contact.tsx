import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { Link as Link2} from "react-scroll";
import Link from 'next/link';
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* {left} */}
          <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl">
            <div className="h-full lg:p-4">
              <div>
                <Image
                  className="duration-300 ease-in rounded-xl hover:scale-105"
                  src="/assets/contact1.jpg"
                  alt="/"
                  width="1000"
                  height="600"
                />
              </div>
              <div>
                <h2 className="py-2 mt-4">Peam Jo</h2>
                <p>Cloud Engineer / Solutions Architect</p>
                <p className="py-4">I am available for full-time positions.</p>
              </div>
              <div>
                <p className="pt-8 uppercase">Connect with me</p>
                <div className="flex items-center justify-between max-w-[250px] m-auto py-4">
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
          {/* {right} */}
          <div className="w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <ContactForm />
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link2
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
