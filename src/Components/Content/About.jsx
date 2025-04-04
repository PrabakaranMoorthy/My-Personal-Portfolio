import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../assets/profile.jpg";
import Resume from "../../assets/Resume.pdf";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { Card } from "flowbite-react";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const educationData = [
    {
      title: "SSLC",
      institution: "PACHAIYAPPA'S HR SEC SCHOOL",
      period: "Mar 2010 - Mar 2011",
      percentage: "Percentage: 64%",
      icon: <FaSchool />,
    },
    {
      title: "Higher Secondary",
      institution: "PACHAIYAPPA'S HR SEC SCHOOL",
      period: "Mar 2012 - Mar 2013",
      percentage: "Percentage: 52%",
      icon: <FaSchool />,
    },
    {
      title: "Bsc Computer Science",
      institution: "SRI SANKARA ARTS AND SCIENCE COLLEGE",
      period: "May 2013 - July 2016",
      cgpa: "CGPA: 71%",
      icon: <FaUniversity />,
    },
  ];

  const coursesData = [
    {
      title: "MERN Stack Development",
      institution: "GUVI GEEK NETWORK PRIVATE LIMITED",
      period: "July 2024-October 2024",
      link: "https://drive.google.com/file/d/1zdj1M8LwUrtXA0Ix2NJiAn2YC6QcUrIi/view?usp=drive_link",
    },
  ];

  const certificatesData = [
    {
      title: "HTML,CSS,Tailwind CSS",
      provider: "GUVI GEEK NETWORK PRIVATE LIMITED",
      link: "https://drive.google.com/file/d/1epzxCo-Pkh257m-rNO1wTUrNKztcVtu4/view?usp=sharing",
    },
    {
      title: "Java Basics",
      provider: "GUVI GEEK NETWORK PRIVATE LIMITED",
      link: "https://drive.google.com/file/d/1WBZWJ2dq6sfiA83EU9N8cAtlUraslsHP/view?usp=sharing",
    },
    {
      title: "Advanced JS",
      provider: "GUVI GEEK NETWORK PRIVATE LIMITED",
      link: "https://drive.google.com/file/d/1p4gnH11Ui6A7qYar7scFNKLXGsNe4giC/view?usp=sharing",
    },
    {
      title: "ReactJS",
      provider: "GUVI GEEK NETWORK PRIVATE LIMITED",
      link: "https://drive.google.com/file/d/1vUCEpx13h9bnDfUfMAzyF7awkgWaJBWX/view?usp=sharing",
    },

    {
      title: "Generative AI Tools",
      provider: "SKILL NATION",
      link: "https://drive.google.com/file/d/1tiswvxPh1Fb9Od4eQHj6wLogGHWH3r8i/view?usp=sharing",
    },
  ];

  return (
    <div className="bg-white flex flex-wrap text-black dark:bg-slate-900 dark:text-white min-h-screen w-full">
      <div
        className="bg-white text-black dark:bg-slate-900 dark:text-white min-h-screen lg:px-40 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
        id="About"
      >
        <img
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          src={img}
          width={390}
          height={190}
          alt=""
          className="rounded border-2 p-1 border-fuchsia-500 img_glow"
        />
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center">
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-4xl md:text-5xl font-semibold mb-8 leading-normal text-fuchsia-500 uppercase"
          >
            About Me
          </h1>
          <p
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-lg text-justify"
          >
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with HTML, CSS, TailwindCSS, Bootstrap, JavaScript, React,
            Redux, MySQL, MongoDB, Node.js, Express.js and Git. I am a quick
            learner and I am always looking to expand my knowledge and skill
            set. I am a team player and I am excited to work with others to
            create amazing applications.
          </p>
          <div className="flex mt-8 gap-2 space-x-2 items-center justify-center ">
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <div
                data-aos="fade-down"
                data-aos-offset="10"
                data-aos-easing="ease-out-sine"
                className="nano-button shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-full py-4 px-8 uppercase overflow-hidden "
              >
                Resume
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        className="bg-white text-black dark:bg-slate-900 dark:text-white w-full min-h-screen lg:px-28 lg:py-0 px-10 py-20 text-center lg:text-start flex lg:flex-row flex-col justify-around lg:gap-28 gap-5 items-center"
        id="Education"
      >
        {/* Education section */}
        <div className="w-full mx-auto">
          <h2
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos="fade-right"
            className="text-3xl font-bold mb-4 text-center uppercase dark:text-emerald-500 text-sky-400"
          >
            Education
          </h2>
          <div className="flex gap-3 flex-col ">
            {educationData.reverse().map((edu, index) => (
              <div
                data-aos-offset="100"
                data-aos-easing="ease-out-sine"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                key={index}
                className="w-full bg-white border border-gray-200 rounded-lg shadow-md dark:shadow-amber-600 dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="px-6 py-4">
                  <div className="flex items-center ">
                    <span className="text-blue-500 text-2xl mr-3">
                      {edu.icon}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {edu.title}
                    </h3>
                  </div>
                  <h4 className="text-md font-medium text-gray-700 dark:text-gray-300">
                    {edu.institution}
                  </h4>
                  <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                    {edu.period}
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    {edu.percentage || edu.cgpa}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full py-28">
          <div className="flex gap-3 flex-col ">
            {/* courses section */}
            <div className="flex flex-col gap-3">
              <h2
                className="text-3xl font-bold mb-4 text-center uppercase dark:text-emerald-500 text-sky-400"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos="fade-left"
              >
                Courses
              </h2>
              {coursesData.map((course, index) => (
                <div
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                  key={index}
                  className="w-full bg-white border border-gray-200 rounded-lg shadow-md dark:shadow-amber-600 dark:bg-gray-800 dark:border-gray-700  "
                >
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="px-6 py-4 flex justify-between hover:scale-105 hover:cursor-pointer">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {course.title}
                      </h3>
                      <h4 className="text-md font-medium text-gray-700 dark:text-gray-300">
                        {course.institution}
                      </h4>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            {/* Certificates section */}
            <div className="">
              <h2
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos="fade-right"
                className="text-3xl font-bold mb-4 text-center uppercase dark:text-emerald-500 text-sky-400"
              >
                Certificates
              </h2>
              <div className="flex flex-wrap gap-4">
                {certificatesData.map((certificate, index) => (
                  <div
                    data-aos-offset="100"
                    data-aos-easing="ease-out-sine"
                    data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                    key={index}
                    className="md:w-fit w-full bg-white border border-gray-200 rounded-lg shadow-md dark:shadow-amber-600 dark:bg-gray-800 dark:border-gray-700 "
                  >
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="px-4 py-3 flex justify-between gap-4 hover:scale-105 hover:cursor-pointer">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {certificate.title}
                        </h3>
                        <h4 className="text-md  font-medium text-gray-500 dark:text-gray-300">
                          {certificate.provider}
                        </h4>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
