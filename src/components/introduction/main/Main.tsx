"use client";

import { useRouter } from "next/navigation";
import React from "react";
import styles from "./Main.module.css";
import { Icon } from "@iconify/react";

export default function Main() {
  const router = useRouter();

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.introduction}>
        <div className={styles.name}>Chuong Tran</div>
        <div className={styles.context}>Software Engineer</div>
        <div className={styles.more}>
          <a
            href="ChuongTran_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.option}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            get resume
          </a>

          <div className={styles.option} onClick={() => router.push("about")}>
            more about me
          </div>
        </div>
        <div className={styles.more}>
          <div className={styles.icons}>
            <Icon
              className={styles.icon}
              icon="ri:linkedin-fill"
              width="30"
              height="30"
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/chuongtran2001/")
              }
            />
            <Icon
              className={styles.icon}
              icon="ri:github-line"
              width="30"
              height="30"
              onClick={() => openInNewTab("https://github.com/chuongtran01")}
            />
            <Icon
              className={styles.icon}
              icon="bxl:gmail"
              width="30"
              height="30"
              onClick={() => openInNewTab("mailto:chuongtran2001@gmail.com")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
