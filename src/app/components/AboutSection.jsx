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
        <li>React Native</li>
        <li>Flutter</li>
        <li>Firebase</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Mongo DB</li>
        <li>Python</li>
        <li>PostgreSQL</li>
        <li>HTML / CSS / Bootstrap</li>
        <li>AR/VR - App Development</li>
        <li>CryptoCurrency</li>
      </ul>
    ),
  },
  {
    title: "Experience and Education",
    id: "Experience and Education",
    content: (
      <ul className="list-disc pl-2">
        <li>Lazy Trunk</li>
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
            My journey as a developer began with a deep fascination for the power of mobile apps. Driven by a desire to create engaging and innovative experiences, & a passion for creating customer-focused solutions, I&apos;ve explored everything from game design to full-stack development. My experience includes React, React Native, JavaScript, MongoDB, Python, SQL, HTML, CSS, and Git ... etc. Through personal projects and exploration I thrive on identifying problems and envisioning creative web/mobile app solutions. With my quick learning capability and fast paced startup work experience, I can adapt to new technologies and collaborate to bring ambitious ideas to life.
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
