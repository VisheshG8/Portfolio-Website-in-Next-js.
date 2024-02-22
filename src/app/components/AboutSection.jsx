"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript / Typescript</li>
        <li>React</li>
        <li>React Native</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Mongo DB</li>
        <li>Python</li>
        <li>PostgreSQL</li>
        <li>HTML / CSS / Bootstrap</li>
        <li>AR/VR - App Development</li>
      </ul>
    ),
  },
  {
    title: "Experience and Education",
    id: "Experience and Education",
    content: (
      <ul className="list-disc pl-2">
        <li>IoTfy Solutions Private Limited</li>
        <li>Ambedkar Institute of Technology</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript Under the Hood - codedamn</li>
        <li>Javascript Algorithms and Data Structures - freeCodeCamp</li>
        <li>Responsive Web Design - freeCodeCamp</li>
        <li>Learn the basics of web - Internet Fundamentals</li>
        <li>AR/VR Application Development - iHub DivyaSampark @IIT Roorkee</li>
        <li>Fundamentals of Digital Marketing - Google</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="about image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web and mobile app developer with a passion for creating
            interactive and responsive web and mobile applications. I have experience
            working with JavaScript, Python, React, React Native, PostgreSQL, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications and bring amazing ideas into reality .
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experience and Education")}
              active={tab === "Experience and Education"}
            >
              {" "}
              Experience and Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
