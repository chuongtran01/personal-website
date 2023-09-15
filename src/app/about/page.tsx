import Introduction from "@/components/introduction/Introduction";
import PersonalProject from "@/components/personalProject/PersonalProject";
import Skills from "@/components/skills/Skills";
import React from "react";
import styles from "./page.module.css";

export default function page() {
  return (
    <div className={styles.container}>
      <Introduction />
      <Skills />
      <PersonalProject />
    </div>
  );
}
