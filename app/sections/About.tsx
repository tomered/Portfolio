import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody.tsx";
import AnimatedTitle from "../animations/AnimatedTitle.tsx";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"ABOUT ME"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[22px] ">
                        <AnimatedBody text="I am a junior full-stack developer with strong skills in React, Node.js, and TypeScript, holding a B.Sc. in Computer Science from the Holon Institute of Technology. Throughout my studies, I have gained hands-on experience in building dynamic and interactive web applications, focusing on both frontend and backend development. My interest in problem-solving and continuous learning has led me to independently develop projects and work on real-world applications." />

                        <AnimatedBody
                            delay={0.1}
                            text="One of my key projects was the development of a pathfinding visualizer web application, which I built entirely on my own using TypeScript, React, and Node.js. This project involved developing both the frontend and backend to create an interactive tool that visualizes search algorithms in real-time. Additionally, I contributed to the Holon Institute of Technology Smart Campus project, collaborating with industry professionals to transform the campus into a controllable and monitored smart environment. I designed the architecture for the full software solution, implemented end-to-end user authentication and authorization, and managed the deployment and DevOps tasks, including application monitoring and issue resolution."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="I am always looking for opportunities to grow and improve my skills. I enjoy learning new technologies, working on diverse projects, and collaborating with others to create practical solutions. I am excited to continue developing my expertise and contribute to meaningful projects."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
