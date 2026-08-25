import {
  FaJava,
  FaReact,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiSpringboot,
  SiTailwindcss,
  SiLeetcode,
  SiPostgresql,
} from "react-icons/si";
import {motion} from "motion/react";

export default function TechStack(){

    const logos = [
        { name: "Java", icon: FaJava, color: "#ED8B00" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
        { name: "LeetCode", icon: SiLeetcode, color: "#FFA116" },
    ]


    return(
        <>
        <div className="overflow-hidden w-full">
            <motion.div className="flex w-max animate-scroll gap-16">
                {[...logos, ...logos,...logos].map(({ name, icon: Icon, color }, index) => (
                    <div
                        key={`${name}-${index}`}
                        className="flex items-center gap-3"
                    >
                        <Icon
                        className="text-4xl"
                        style={{ color }}
                        />

                        <span className="text-white text-lg font-medium">
                        {name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
        </>
    )
}