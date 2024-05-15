import Image from "next/image";
import { Inter, JetBrains_Mono } from "next/font/google";
import Landing from "./components/landing";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Link from "next/link";
import About from "./components/about";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
