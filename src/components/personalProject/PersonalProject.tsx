"use client";

import React from "react";
import styles from "./PersonalProject.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import infodatLogo from "../../assets/infodat-logo-new.png";
import mainbridgeLogo from "../../assets/Mainbridge-Logo-White.png";
import ThemeParkDatabase from "../../assets/theme-park-database-2.jpeg";
import FuelQuoteGenerator from "../../assets/fuel-quote-generator.jpeg";

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  technology: string;
  img: StaticImageData;
  url: string;
}

const mockProjects = [
  {
    id: "1",
    title: "Infodat Internship",
    description:
      "Developed an intuitive and interactive UI to optimize the internal assessment process.",
    techonology: "React.js, TypeScript, Jest.",
    img: infodatLogo,
    url: "https://www.infodatinc.com/",
  },
  {
    id: "2",
    title: "Mainbridge Health Partners Internship",
    description:
      "Built a management application to effectively manage patient and doctor records and streamline hospital operations.",
    techonology: "ASP.NET MVC, MSSQL.",
    img: mainbridgeLogo,
    url: "https://www.mainbridgehp.com/",
  },

  {
    id: "3",
    title: "Fuel Quote Generator",
    description:
      "Implement a full-stack application to generate fuel quote based on client location, history, requested gallons, etc.",
    techonology: "React.js, Express.js, MySQL.",
    img: FuelQuoteGenerator,
    url: "https://github.com/tranlac2210/COSC-4353-Project",
  },
  {
    id: "4",
    title: "Amusement Park Website | Back-end",
    description:
      "Wrote a complete set of REST API endpoints for process web client requests.",
    techonology: "ASP.NET Core, MySQL.",
    img: ThemeParkDatabase,
    url: "https://github.com/chuongtran01/Park-Database",
  },
];

const Project = (props: ProjectProps) => {
  const { id, title, description, img, url, technology } = props;

  return (
    <article key={id} className={styles.project}>
      <Link href={url} target="_blank" className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={img}
          alt={title}
          width={300}
          height={150}
        />
        <div className={styles.view}>View</div>
      </Link>

      <div className={styles.titleDescContainer}>
        <div className={styles.projectTitle}>{title}</div>
        <div className={styles.projectDesc}>{description}</div>
        <div className={styles.projectTech}>
          <b>Technologies:</b> {technology}
        </div>
      </div>
    </article>
  );
};

export default function PersonalProject() {
  return (
    <div id="works" className={styles.container}>
      <div className={styles.header}>recent works</div>
      <div className={styles.projectContainer}>
        {mockProjects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            technology={project.techonology}
            description={project.description}
            img={project.img}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}
