"use client"
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
  });
  const inter = Inter({
    subsets: ["latin"],
  });
const Landing = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
      const getCurrentTime = () => {
        const date = new Date();
        const options = {
          timeZone: "America/Toronto",
          hour12: true,
          hour: "numeric",
          minute: "numeric",
  
          timeZoneName: "short",
        };
        const timeString = date.toLocaleString("en-US", options);
        return timeString.replace(" ", "");
      };
  
      //update time
      const interval = setInterval(() => {
        const updatedTime = getCurrentTime();
        setTime(updatedTime);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
return (
    <main
    className={`${jetbrains.className} text-grey `}
  >
    <div className="relative h-screen max-w-2xl mx-auto flex flex-col items-center justify-center"> 

  
    <div className="absolute top-16 left-6 flex items-center gap-2">
      <div className="rounded-full w-2 h-2 bg-[#56F465] animate-pulse"></div>
      <p className="font-extralight text-xs tracking-widest text-grey">
        Available
      </p>
    </div>
    <header className="relative">
      <h1 className="z-[9999] relative tracking-[4px] font-extrabold ">
        MICHELLE WU
      </h1>
      <p
        className={`${inter.className} absolute top-[-40px] left-[9px] text-gray-200/25 text-[4rem] tracking-[15px]`}
      >
        MW
      </p>
      <p className="text-xs tracking-wider text-center mt-4 font-extralight">
        FRONT-END DEV.
      </p>
     <div className="text-center mt-4 text-xs tracking-wider flex gap-2 font-extralight">
      <p className=" ">TORONTO</p>
      <p>{time}</p>
     </div>
    </header>
  
    <nav className="absolute bottom-16 justify-self-end text-center flex flex-col md:flex-row md:justify-between md:items-center md:w-[500px] gap-4">
          <Link
            href="#projects"
            className="navbutton cursor-pointer text-xs border-[1px] py-3 px-8 border-black transition"
            aria-label="projects"
          >
            <span>PROJECTS</span>
          </Link>

          <Link
            href="#contact"
            className="navbutton cursor-pointer text-xs border-[1px] py-3 px-8 border-black transition"
            aria-label="contact information"
          >
            <span>CONTACT</span>
          </Link>
        
        </nav>
        </div>
  </main>
)

}
export default Landing;