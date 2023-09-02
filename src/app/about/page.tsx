import Introduction from "@/components/introduction/Introduction";
import PersonalProject from "@/components/personalProject/PersonalProject";
import React from "react";
import styles from "./page.module.css";

export default function page() {
  return (
    <div className={styles.container}>
      <Introduction />
      <PersonalProject />
    </div>
  );
}
