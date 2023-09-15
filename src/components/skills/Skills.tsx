import React from "react";
import styles from "./Skills.module.css";

const skills = {
  languages: "C++, C#, Java, JavaScript, TypeScript, Python, SQL.",
  webDevelopment:
    "React.js, Redux, Node.js, Express.js, ASP.NET, HTML/CSS, REST API.",
  database: "MongoDB, MySQL, MSSQL.",
  tools: "Git, GitHub, GitLab, Firebase, Postman, Azure.",
};

export default function Skills() {
  return (
    <div className={styles.introduction}>
      <div className={styles.about}>technical skills</div>
      <div className={styles.context}>
        <ul className={styles.list}>
          <li>Languages: {skills.languages}</li>
          <li>Web Development: {skills.webDevelopment}</li>
          <li>Database: {skills.database}</li>
          <li>Tools: {skills.tools}</li>
        </ul>
      </div>
    </div>
  );
}
