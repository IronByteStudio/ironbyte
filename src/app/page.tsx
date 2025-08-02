"use client";

import Image from "next/image";
import styles from "./page.module.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Contact />
    </>
  );
}
