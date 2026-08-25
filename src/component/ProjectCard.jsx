import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  children,
  title = "",
  discription = "",
  image = "",
  live = "",
  link = "",
  githubLink = ""
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="w-full max-w-[320px] overflow-hidden rounded-xl border border-white/15 bg-[#080808] p-3"
    >

      {/* Project Image */}
      <div className="w-full h-40 overflow-hidden rounded-lg bg-white/5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>


      {/* Project Content */}
      <div className="px-1 pt-4">

        {/* Title */}
        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>


        {/* Subtitle */}
        {live && (
          <p className="text-primary text-sm font-medium mt-1">
            {live}
          </p>
        )}


        {/* Description */}
        <p className="text-zinc-400 text-sm leading-5 mt-2">
          {discription}
        </p>


        {/* Optional content / tech stack */}
        {children && (
          <div className="flex flex-wrap gap-2 mt-3">
            {children}
          </div>
        )}


        {/* Buttons */}
        <div className="flex gap-4 mt-4">

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-md border border-primary text-white text-sm hover:bg-primary transition-all duration-300"
          >
            Live Demo
            <FaExternalLinkAlt className="text-xs" />
          </a>


          <a
            href={githubLink}
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
  );
}