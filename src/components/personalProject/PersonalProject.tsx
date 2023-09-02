"use client";

import React from "react";
import styles from "./PersonalProject.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import infodatLogo from "../../assets/infodat-logo-new.png";
import mainbridgeLogo from "../../assets/Mainbridge-Logo-White.png";

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  img: StaticImageData;
  url: string;
}

const mockProjects = [
  {
    id: "1",
    title: "Infodat",
    description:
      "An intuitive and interactive UI utilizing React.js to optimize the internal assessment process.",
    img: infodatLogo,
    url: "https://www.infodatinc.com/",
  },
  {
    id: "2",
    title: "Mainbridge Health Partners",
    description:
      "A management application using ASP.NET MVC to effectively manage patient and doctor records and streamline hospital operations.",
    img: mainbridgeLogo,
    url: "https://www.mainbridgehp.com/",
  },

  {
    id: "3",
    title: "Fuel Quote Generator",
    description:
      "Full-stack application ultilizing React.js, Express.js, and MySQL to generate fuel quote based on client location, history, requested gallons, etc.",
    img: infodatLogo,
    url: "https://github.com/tranlac2210/COSC-4353-Project",
  },
  {
    id: "4",
    title: "Amusement Park Website | Back-end",
    description:
      "Complete set of REST API endpoints for process web client requests using ASP.NET Core.",
    img: infodatLogo,
    url: "https://github.com/chuongtran01/Park-Database",
  },
];

const Project = (props: ProjectProps) => {
  const { id, title, description, img, url } = props;

  return (
    <article key={id} className={styles.project}>
      <Link href={url} target="_blank" className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={img}
          alt={title}
          width={300}
          height={100}
        />
        <div className={styles.view}>View</div>
      </Link>

      <div className={styles.titleDescContainer}>
        <div className={styles.projectTitle}>{title}</div>
        <div className={styles.projectDesc}>{description}</div>
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
            description={project.description}
            img={project.img}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}
