import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            After graduating with a degree in Information Science from Cornell
            University, I started working with my family`&apos;`s company,
            developing properties around Bangkok. After a few years, I have
            decided to pursue a career in Cloud Computing, since I believe it is
            a technology that can be utilized by many existing companies around
            the world, increasing their efficiency and improving their
            day-to-day operations.
          </p>
          <p className="py-2 text-gray-600">
            During my time in the university, I have had the chance to study
            programming languages, including Python and Java. I also attended
            classes like <b className="text-[#5651e5]">Data Science</b> and{" "}
            <b className="text-[#5651e5]">Intermediate Web Making</b> which
            helped bolster my programming skills.
          </p>
          <p className="py-2 text-gray-600">
            Since graduating, I have had a chance to study about the Cloud on my
            own. Starting from using Docker in my home NAS, into discovering
            AWS, I have gained a massive interest in possibilities of the Cloud.
            This is why I started studying for and attained the{" "}
            <b className="text-[#5651e5]">
              CKA (Certified Kubernetes Administrator)
            </b>{" "}
            certificate alongside the{" "}
            <b className="text-[#5651e5]">AWS Certified Cloud Practitioner</b>{" "}
            certicate.
          </p>
          <p className="py-2 text-gray-600">
            I aim to start working in the Cloud industry as a Cloud Engineer /
            Solutions Architect, to not only gain experience in different
            Clouds, but also develop my skills in communications with business
            clients and customers who want to transition into or improve their
            usage of the Cloud.
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-cl shadow-gray-400 rounded-xl hover:scale-105">
          <Image
            className="rounded-xl"
            src="/assets/profile.jpg"
            alt="/"
            width="400"
            height="400"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
