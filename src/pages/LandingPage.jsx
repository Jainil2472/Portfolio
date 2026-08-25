  import { AnimatePresence, motion } from "motion/react";
  import Profile from "../assets/ProfilePhoto3.png";
  import FloatingParticles from "../component/FloatingParticle.jsx"
  import FloatingLongParticle  from "../component/FloatingLongParticle.jsx"
  import ProjectCard  from "../component/ProjectCard.jsx"
  import { AiFillLinkedin  } from "react-icons/ai";
  import { SiLeetcode, SiGmail,SiGithub   } from "react-icons/si";
  import { FaExternalLinkAlt,FaStar,FaGraduationCap,FaEnvelope,FaGithub, FaRegCalendarAlt ,FaCode ,FaUsers  } from "react-icons/fa";
  import TechStack from "../component/TechStack.jsx";
  import { IoRocketOutline } from "react-icons/io5";
  import { useState } from "react";
  import {useGSAP} from "react";
  import { gsap } from "gsap/gsap-core";
  import StockCoreVID from "../assets/StockCoreVID.mp4"
  import Trashcash from "../assets/Trashcash.png"
  import CRM360 from "../assets/CRM360.mp4"

  export default function LandingPage2() {

    const projects = [
    {
      title: "StockCore",
      media: StockCoreVID,
      type : "video",
      live: "Inventory Management System",
      discription: "Full-stack inventory platform to track stock, warehouses, and categories with JWT authentication, Razorpay payments and AI-driven forecasting.",
      link: "https://stock-core-uu6u.vercel.app",
      githubLink: "https://github.com/Jainil2472/StockCore"
    },
    {
      title: "TrashCash",
      media: Trashcash,
      type : "img",
      live: "Scrap Pickup Platform",
      discription: "Full-stack scrap pickup platform that allows users to schedule scrap collections, manage pickup requests and make secure online payments.",
      ink: "",
      githubLink: "https://github.com/Jainil2472/StockCore"
    },
    {
      title: "CRM360",
      type:"video",
      media: CRM360,
      live: "Distributed Code Execution Platform",
      discription: "Modern CRM360 landing page design showcasing a 360° CRM platform that helps businesses manage customer relationships, sales, leads and business operations through a centralized solution.",
      link: "https://crm-360-bmeh8v66l-jainil2472s-projects.vercel.app?_vercel_share=Q1qKyuLRAGoge7VVQJP8eBf3iZaW9nNw",
      githubLink: "https://github.com/Jainil2472/CRM360"
    }
  ];

  const [projectcount,setcount] = useState(0);
  console.log(projects[projectcount].img);

    return (
      <>
      
      <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
        <section className="max-w-7xl mx-auto px-8 lg:px-16 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ ase: [0.22, 1, 0.36, 1],duration: 4 }}
            >
              <motion.h3
                initial={{ opacity: 0}}
                animate={{ opacity: 2 }}
                transition={{ ase: [0.22, 1, 0.36, 1],duration: 3  }}
                className="text-primary text-2xl font-semibold"
              >
                Hello, I'm
              </motion.h3>

              <motion.h1
                initial={{ opacity: 0}}
                animate={{ opacity: 2}}
                transition={{ ase: [0.22, 1, 0.36, 1],duration: 3  }}
                className="mt-4 text-7xl lg:text-8xl font-bold leading-none"
              >
                Jainil Patel
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ease: "easeOut", duration: 3 }}
                className="flex items-center mt-6"
              >
                <div className="w-1 h-10 bg-primary rounded-full mr-4"></div>

                <h2 className="text-4xl font-semibold">
                  <span className="text-primary">Full-Stack </span>

                  <span className="text-white">Developer</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{ease: "easeOut", duration: 3  }}
                className="text-zinc-400 text-lg leading-8 mt-8 max-w-xl"
              >
                I build scalable and efficient web applications using Java,
                Spring Boot, ReactJS and modern technologies. Passionate about
                clean code, problem solving and creating impactful digital
                experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3  }}
                className="flex gap-5 mt-10"
              >
                <button className="px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-[#FF6B00] via-[#FF7A00] to-[#FF9A2B] shadow-[0_10px_30px_rgba(255,122,0,0.35)] hover:scale-105 hover:shadow-[0_15px_40px_rgba(255,122,0,0.45)] transition-all duration-300">
                  Download Resume
                </button>

                <button className="px-8 py-4 rounded-2xl border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  Contact Me
                </button>

              </motion.div>
              <motion.div className="mt-10 grid grid-cols-4"
                initial= {{
                  x:0,
                  y:30,
                  opacity:0 
                }}
                animate ={{
                  y:0,
                  opacity:2
                }}
                transition={{
                  duration:3
                }}
              >
                <a href="https://www.linkedin.com/in/jainilpate/" target="_blank" >
                <AiFillLinkedin  className="size-10 transition-colors duration-300 hover:shadow-2xl hover:shadow-[#0A66C2]  hover:text-[#0A66C2] " />
                </a>
                <a href="https://leetcode.com/u/pjainil002/" target="_blank">
                <SiLeetcode className="size-10 transition-colors duration-300 hover:shadow-2xl hover:shadow-[#FFA116] hover:text-[#FFA116] " />
                </a>
                
                <a href="https://github.com/Jainil2472/" target="_blank">
                <FaGithub   className="size-10  text-white transition-colors hover:shadow-2xl hover:shadow-gray-400 duration-300 hover:text-gray-400"/>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pjainil002@gmail.com" target="_blank"> 
                <SiGmail className="size-10 transition-colors duration-300 hover:shadow-2xl hover:shadow-[#EA4335] hover:text-[#EA4335] " />
                </a>

              </motion.div>
            </motion.div>

            {/* RIGHT */}

            <div className="relative flex justify-center items-center">
              <FloatingParticles />
              
              {/* Glow */}

              <div className="absolute w-[420px] h-[420px] rounded-full bg-primary/30 blur-[120px]" />

              {/* Ring */}

              <motion.div className="absolute w-[520px] h-[520px] rounded-full border border-primary/20" />

              {/* Image */}

              <motion.img
                src={Profile}
                alt="Jainil Patel"
                initial={{ opacity: 0 , y:50}}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [100, 0, 0],
                }}
                transition={{
                  opacity: { duration: 0.8 },
                  x: { duration: 0.8 },
                  y: {
                    duration: 4,
                    ease: "easeInOut",
                  },
                }}
                className="relative z-10 w-[500px] mt-14"
              />
            </div>

          </div>
        </section>
        <section>

        </section>
        <section className="w-[90%] h-32 border border-gray-300/30 rounded-2xl justify-self-center items-center grid grid-cols-4">

          <div className="border-r text-white border-gray-300/30 flex flex-row items-center">
            <FaRegCalendarAlt className="size-1/6 text-primary ml-10" />

            <div className="text-3xl text-primary ml-5">
              6+
              <p className="text-sm text-white">
                Months Experience
              </p>
            </div>
          </div>


          <div className="border-r text-white border-gray-300/30 flex flex-row items-center">
            <FaCode className="text-primary size-1/6 ml-10" />

            <div className="text-3xl text-primary ml-5">
              3+
              <p className="text-sm text-white">
                Major Project
              </p>
            </div>
          </div>


          <div className="border-r text-white border-gray-300/30 flex flex-row items-center">
            <FaUsers className="text-primary size-1/6 ml-10" />

            <div className="text-xl text-primary ml-5">
              Problem Solver
              <p className="text-sm text-white">
                DSA Enthusiast
              </p>
            </div>
          </div>


          <div className="text-white flex flex-row items-center">
            <IoRocketOutline className="text-primary size-1/6 ml-10" />

            <div className="text-xl text-primary ml-5">
              Quick Learner
              <p className="text-sm text-white">
                Passionate Developer
              </p>
            </div>
          </div>

        </section>
            

        <section className="grid lg:grid-cols-2 gap-8 w-full px-8 lg:px-16 py-20">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-16">

            {/* ABOUT ME */}
            <div className="w-full">
              <div className="max-w-4xl">

                <p className="text-primary text-sm font-medium">
                  ABOUT ME
                </p>

                <h2 className="text-4xl font-semibold text-white mt-3">
                  Who I Am
                </h2>

                <div className="w-9 h-1 bg-primary mt-3 mb-5 rounded-full"></div>

                <p className="text-zinc-300 text-base leading-7">
                  I'm a detail-oriented Full-Stack Developer with hands-on
                  experience in building secure, scalable and high-performance
                  web applications. I enjoy turning complex problems into simple,
                  beautiful and intuitive solutions.
                </p>

              </div>
            </div>


            {/* EDUCATION */}
            <div className="w-full">

              <div className="max-w-6xl mx-auto">

                {/* Section Heading */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>

                  <h2 className="text-xl font-medium text-white">
                    EDUCATION
                  </h2>
                </div>

                {/* Education Card */}
                <div className="relative border border-gray-300/20 rounded-2xl px-6 py-5 bg-white/[0.01]">

                  {/* Timeline */}
                  <div className="absolute left-[40px] top-9 bottom-9 w-[2px] bg-primary"></div>


                  {/* SSC */}
                  <div className="relative flex gap-6 mb-5">

                    <div className="relative z-10 shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                      <FaStar className="text-white text-xs" />
                    </div>

                    <div className="flex-1">

                      <div className="flex flex-col md:flex-row md:justify-between gap-0.5">

                        <h3 className="text-sm text-white font-medium">
                          Swami Vivekanand Gujarati Medium School
                        </h3>

                        <span className="text-primary text-sm font-medium">
                          2018
                        </span>

                      </div>

                      <p className="text-zinc-400 text-sm mt-0.5">
                        Class X
                      </p>

                      <p className="text-primary text-sm font-medium">
                        63.43%
                      </p>

                    </div>
                  </div>


                  {/* Diploma */}
                  <div className="relative flex gap-6 mb-5">

                    <div className="relative z-10 shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                      <FaGraduationCap className="text-white text-base" />
                    </div>

                    <div className="flex-1">

                      <div className="flex flex-col md:flex-row md:justify-between gap-0.5">

                        <h3 className="text-sm text-white font-medium">
                          Shree K.J. Polytechnic
                        </h3>

                        <span className="text-primary text-sm font-medium">
                          2023
                        </span>

                      </div>

                      <p className="text-zinc-400 text-sm mt-0.5">
                        Diploma in Engineering
                      </p>

                      <p className="text-primary text-sm font-medium">
                        GPA: 7.85
                      </p>

                    </div>
                  </div>


                  {/* B.Tech */}
                  <div className="relative flex gap-6">

                    <div className="relative z-10 shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                      <FaGraduationCap className="text-white text-base" />
                    </div>

                    <div className="flex-1">

                      <div className="flex flex-col md:flex-row md:justify-between gap-0.5">

                        <h3 className="text-sm text-white font-medium">
                          Dharmsinh Desai University
                        </h3>

                        <span className="text-primary text-sm font-medium">
                          2026
                        </span>

                      </div>

                      <p className="text-zinc-400 text-sm mt-0.5">
                        Bachelor of Technology in Information Technology
                      </p>

                      <p className="text-primary text-sm font-medium">
                        CPI: 6.82
                      </p>

                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* RIGHT COLUMN — EXPERIENCE */}
          <div className="w-full">

            <div className="max-w-6xl mx-auto">

              {/* Section Heading */}
              <div className="flex items-center gap-4 mb-8">

                <div className="w-4 h-4 rounded-full bg-primary"></div>

                <h2 className="text-2xl font-medium text-white">
                  EXPERIENCE
                </h2>

              </div>


              {/* Experience Card */}
              <div className="relative border border-gray-300/20 rounded-2xl p-8 bg-white/[0.01]">

                {/* Timeline */}
                <div className="absolute left-9 top-11 bottom-9 w-[2px] bg-primary"></div>

                {/* Timeline Dot */}
                <div className="absolute left-[29px] top-9 w-4 h-4 rounded-full bg-primary"></div>

                {/* Content */}
                <div className="ml-12">

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

                    <h3 className="text-xl text-white font-medium">
                      Meru Technosoft Private Limited
                    </h3>

                    <span className="text-zinc-300 text-base">
                      Dec 2025 – Apr 2026
                    </span>

                  </div>

                  <h4 className="text-primary text-xl font-medium mt-2">
                    Full Stack Developer Intern
                  </h4>

                  <ul className="mt-4 space-y-2 text-zinc-300 text-base leading-7 list-disc pl-5">

                    <li>
                      Developed and optimized a dynamic full-stack web application
                      using Java, Spring Boot and ReactJS with Vite.
                    </li>

                    <li>
                      Designed and tested RESTful API endpoints for complex
                      database operations.
                    </li>

                    <li>
                      Collaborated with cross-functional teams to deliver quality
                      solutions and maintain clean code.
                    </li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </section>
        <section>
          <div className="place-self-center ">

            <AnimatePresence mode="wait">

              <motion.div
                    initial={{opacity:0,x:20}}
                    animate={{opacity:1, x:0}}
                    exit={{opacity:0,x:-20}}
                    key={projectcount}
                    className="w-full max-w-[420px] overflow-hidden rounded-xl border border-white/15 bg-[#080808] p-3"
                  >

                    {/* Project Image */}
                    <div className="w-full h-40 overflow-hidden rounded-lg bg-white/5">
                      {projects[projectcount].type === "video" ? (
                        <video
                          src={projects[projectcount].media}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-fit h-fit object-cover transition-transform duration-500 hover:scale-105"
                        />
                      ) : (
                        <img
                          src={projects[projectcount].media}
                          alt="Project Preview"
                          className="w-fit h-fit object-cover transition-transform duration-500 hover:scale-105"
                        />
                      )}
                    </div>
              
                    {/* Project Content */}
                    <div className="px-1 pt-4">
              
                      {/* Title */}
                      <h2 className="text-xl font-semibold text-white">
                        {projects[projectcount].title}
                      </h2>

                      {/* Subtitle */}
                      {projects[projectcount].live && (
                        <p className="text-primary text-sm font-medium mt-1">
                          {projects[projectcount].link}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-zinc-400 text-sm leading-5 mt-2">
                        {projects[projectcount].discription}
                      </p>

                      {/* Buttons */}
                      <div className="flex gap-4 mt-4">
              
                        {projects[projectcount].link!=null ?
                        <a
                          href={projects[projectcount].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-md border border-primary text-white text-sm hover:bg-primary transition-all duration-300"
                        >
                        Link
                          <FaExternalLinkAlt className="text-xs" />
                        </a> : <div/>}
                        
              
              
                        <a
                          href={projects[projectcount].githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-md border border-white/30 text-white text-sm hover:border-white hover:bg-white/10 transition-all duration-300"
                        >
                          <FaGithub className="text-base" />
                          GitHub
                        </a>
              
                      </div>
              
                    </div>
              
                  </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-between mt-8">

              {/* Previous */}
              <button onClick={()=>{setcount((projectcount-1)%projects.length)}} className="w-12 h-12 rounded-full border border-white/30 flex items-center pb-1 justify-center text-zinc-400 hover:text-white hover:border-primary transition-all duration-300">
                <span className="text-2xl">
                  ←
                </span>
              </button>

              {/* Next */}
              <button onClick={()=>{setcount((projectcount+1)%projects.length)}} className="w-12 h-12 rounded-full border border-white/30 flex items-center pb-1 justify-center text-zinc-400 hover:text-white hover:border-primary transition-all duration-300">
                <span className="text-2xl">
                  →
                </span>
              </button>

            </div>
          </div>
        </section>
        <section className="  rounded-2xl m-20 min-w-full h-20 w-[90%] place-self-center content-center mask-l-from-50% mask-r-from-50% ">
          
          <TechStack className="bg-white"/>
          
        </section>
        
      </main>
      </>
    );
  }