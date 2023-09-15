"use client";

import { useRouter } from "next/navigation";
import React from "react";
import styles from "./Introduction.module.css";

export default function Introduction() {
  const router = useRouter();

  return (
    <div id="bio" className={styles.introduction}>
      <div className={styles.about}>about</div>
      <div className={styles.context}>
        I am an undergraduate computer science student attending the University
        of Houston that will be graduating in Decemner 2023. I have worked as a
        Teaching Assistant for 1 year at University of Houston. Later, I
        interned at Mainbridge Health Partners as a Software Engineer Intern.
        After that, I landed a role as a Software Developer Intern at Infodat.
      </div>
    </div>
  );
}
