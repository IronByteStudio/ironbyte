"use client";

import Image from "next/image";
import styles from "./page.module.css";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <div className={styles.full} />
      <About />
      <Contact />
    </>
  );
}
