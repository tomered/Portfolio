import {
    SiCplusplus,
    SiFramer,
    SiGithub,
    SiNeovim,
    SiNodedotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiMui,
    SiZig,
    SiMongodb,
    SiPostgresql,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Pathfinding visualizer",
        description:
      "Interactive pathfinding visualizer built with React, MUI, RTK, and Node.js. Explore and compare search algorithms with real-time visualizations and performance analysis.",
        technologies: [SiTypescript, SiReact, SiNodedotjs, SiMui, SiMongodb],
        techNames: ["TypeScript", "React", "Node.js", "material-ui", "MongoDB"],
        techLinks: [
            "https://www.typescriptlang.org/",
            "https://reactjs.org/",
            "https://nodejs.org/",
            "https://mui.com/material-ui/",
            "https://www.mongodb.com/",
        ],
        github: "https://github.com/tomered/PathFinding-Frontend",
        image: "/projects/Pathfinding.gif",
        available: true,
    },
    {
        id: 1,
        name: "Smart campus",
        description:
      "Smart campus system for monitoring and controlling campus facilities with real-time data integration, robust authentication, and scalable architecture. Developed with HIT and industry professionals.",
        technologies: [SiTypescript, SiReact, SiNodedotjs, SiMui, SiPostgresql],
        techNames: ["Typescript", "React", "Node.js", "material-ui", "PostgreSQL"],
        techLinks: [
            "https://www.typescriptlang.org/",
            "https://reactjs.org/",
            "https://nodejs.org/",
            "https://mui.com/material-ui/",
            "https://www.postgresql.org/",
        ],
        github: "https://github.com/tomered/smart-campus-frontend",
        image: "/projects/Smartcampus.gif",
        available: true,
    },
];
