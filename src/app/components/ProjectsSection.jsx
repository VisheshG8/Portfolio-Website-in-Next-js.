"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 0,
    title: "Sportify",
    description: "Sportify - Watch and Play along sports , Live Cricket Tournament Scores like IPL",
    image: '/images/projects/0.png',
    tag: ["All", "Web"],
    gitUrl: "https://sportify-production.bubbleapps.io/version-test",
    previewUrl: "https://sportify-production.bubbleapps.io/version-test",
  },
  {
    id: 1,
    title: "Portfolio Website",
    description: "My Portfolio Website built using Next.js",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/VisheshG8/Portfolio-Website-in-Next-js.",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Full Stack Notes Application",
    description: "This is a notes application created using MERN stack. ",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/VisheshG8/Full-Stack-Notes-Application-Backend",
    previewUrl: "https://vishesh-enotebook.netlify.app/",
  },
  {
    id: 3,
    title: "Fun Activity Website",
    description:
      "This is the aggregator website of some mini projects I created during the initial stage , when I just started my development journey.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/VisheshG8/-Fun-Act-Website",
    previewUrl: "https://visheshg8.github.io/-Fun-Act-Website/",
  },
  {
    id: 4,
    title: "Metaverse Gym Website",
    description:
      "This was my first website I created , Back in 2022 , This website is created based on the Idea of a Metaverse Gym which came to my mind, India's first Metaverse Gym.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/VisheshG8/Metaverse-Gym",
    previewUrl: "https://visheshg8.github.io/Metaverse-Gym/",
  },
  {
    id: 5,
    title: "Currency Converter",
    description:
      "This is a simple and intutive application which provides the conversion of INR amount to various popular currencies based on the current exchnage rate.",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl:
      "https://drive.google.com/file/d/1d9JxQdF4YmAIF02fiPxBQmv88FQ3v0st/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/1d9JxQdF4YmAIF02fiPxBQmv88FQ3v0st/view?usp=sharing",
  },
  {
    id: 6,
    title: "Tic-Tac-Toe Star ",
    description:
      "This is the classic Tic Tac Toe application with Rockets and Stars as Players",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl:
      "https://drive.google.com/file/d/1SMxRgU2AHvUcJOi6WUxJp4aHUwFd1Sy9/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/1SMxRgU2AHvUcJOi6WUxJp4aHUwFd1Sy9/view?usp=sharing",
  },
  {
    id: 7,
    title: "Roll The Dice",
    description:
      "Feel the Roll of the Dice with Haptic Feedback and Try your luck by rolling this cool Virtual Dice",
    image: "/images/projects/7.png",
    tag: ["All", "Mobile"],
    gitUrl:
      "https://drive.google.com/file/d/1u2_crA64odPGMwN6ArTgn321J7p-X9Dn/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/1u2_crA64odPGMwN6ArTgn321J7p-X9Dn/view?usp=sharing",
  },
  {
    id: 8,
    title: "Random Colour Generator",
    description:
      "This is a colourful application with the surprise of different colours on each click , Fill the shapes with multiple colours on Each click",
    image: "/images/projects/8.png",
    tag: ["All", "Mobile"],
    gitUrl:
      "https://drive.google.com/file/d/1DcVJrC_6bepncB7tKUdDznnOGTJl9xvS/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/1DcVJrC_6bepncB7tKUdDznnOGTJl9xvS/view?usp=sharing",
  },
  {
    id: 9,
    title: "Password Generator",
    description:
      "This is a simple and very useful application which helps you to generate the random passwords based on your requirements",
    image: "/images/projects/9.png",
    tag: ["All", "Mobile"],
    gitUrl:
      "https://drive.google.com/file/d/14b3eCtUc8dxifMBM1w9QRaW2yGlcrLsB/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/14b3eCtUc8dxifMBM1w9QRaW2yGlcrLsB/view?usp=sharing",
  },
  {
    id: 10,
    title: "Fun Social Games",
    description:
      "This is my first react native application, built on the idea to solve the problem of finding different different games to play with family and friends in a single app. Let's have some variety of games to play based on your choice. This is the first version of this application.",
    image: "/images/projects/10.jpeg",
    tag: ["All", "Mobile"],
    gitUrl:
      "https://drive.google.com/file/d/1WwUEpuuzxo-Kqm55qalhqHnSA1s-FAx0/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/1WwUEpuuzxo-Kqm55qalhqHnSA1s-FAx0/view?usp=sharing",
  },
  {
    id: 11,
    title: "Solar System - AR",
    description:
      "This is the AR(Argumented Reality) application with this application you can view the solar system in a 3D model with the option to animate the movement of planets , you can customize the background of universe , also you can zoom in & out and dwelve deeper in the solar system",
    image: "/images/projects/11.png",
    tag: ["All", "AR/VR"],
    gitUrl:
      "https://drive.google.com/file/d/1uDXGsRwFZXrdTmq33doSHTEScDArMhiq/view?usp=sharing",
    previewUrl:
      "https://youtu.be/d6D4cOOyUdc?si=znNaGTNYXiiEYfUO",
  },
  {
    id: 12,
    title: "Creatures Shooting Game in VR",
    description:
      "This is the fun and interactive shooting game with 360° Movement, You are on a different planet with beautiful night sky where you need to shoot the aliens or creatures coming towards you. Get ready with your VR headset to experience this Shooting game in the world of Virtual Reality.",
    image: "/images/projects/12.png",
    tag: ["All", "AR/VR"],
    gitUrl:
      "https://drive.google.com/file/d/1uvbjVpWwan-mCUatMNjEDG11HpwRbhAu/view?usp=drive_link",
    previewUrl:
      "https://youtu.be/FlRVbCb9S6c?si=_e6nlPibcCtgsLqv",
  },
  {
    id: 13,
    title: "360° Scenes in VR",
    description:
      "Created with Unity, In this application you can travel to different different beautiful destinations across the globe and can view it in 360°",
    image: "/images/projects/13.jpg",
    tag: ["All", "AR/VR"],
    gitUrl:
      "https://drive.google.com/file/d/1us5nmKdnIVR4TZiUdUvXfz_QH5eYKd0h/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/1us5nmKdnIVR4TZiUdUvXfz_QH5eYKd0h/view?usp=sharing",
  },
  {
    id: 14,
    title: "Music Player",
    description:
      "This is a simple but beautifully designed music player loaded with songs , which you can listen on the go , This music player supports background music play , notification controls.",
    image: "/images/projects/14.png",
    tag: ["All", "AR/VR"],
    gitUrl:
      "https://drive.google.com/file/d/1vFRQG96Y50abbeITjXMFhJ2A9scHVvrW/view?usp=sharing",
    previewUrl:
      "https://drive.google.com/file/d/1vFRQG96Y50abbeITjXMFhJ2A9scHVvrW/view?usp=sharing",
  }

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AR/VR"
          isSelected={tag === "AR/VR"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
