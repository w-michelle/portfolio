"use client";
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
  const getCurrentTime = () => {
    const date = new Date();
    const options = {
      timeZone: "America/Toronto",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short",
    };
    return date.toLocaleString("en-US", options).replace(" ", "");
  };

  const [time, setTime] = useState(getCurrentTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className={`${jetbrains.className} text-grey `}>
      <div className="relative h-screen max-w-2xl gap-8 mx-auto flex flex-col items-center justify-center">
        <div className="absolute top-16 left-12 flex items-center gap-2">
          <div className="rounded-full w-2 h-2 bg-[#56F465] animate-fast-pulse"></div>
          <p className="font-extralight text-xs tracking-widest text-grey">
            Available
          </p>
        </div>
        <header className="flex flex-col items-center">
          <div className="relative border-1 border-black">
            <h1 className="relative z-10 tracking-[4px] font-extrabold ">
              MICHELLE WU
            </h1>
            <p
              className={`${inter.className} z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-200/25 text-[4rem] tracking-[15px]`}
            >
              MW
            </p>
          </div>

          <p className="text-xs tracking-wider text-center mt-4 font-extralight">
            DEVELOPER
          </p>
          <div className="flex items-center">
            <p className="relative text-xs tracking-wider text-center mt-4 font-extralight mr-2">
              LEARNING THREE.JS
            </p>
            <div className=" absolute right-0 flex items-center">
              <div className=" top-1/2 translate-y-[7px] right-0 border-t-2  border-neutral-200 sm:w-10 md:w-14 mr-2"></div>
              <div className="md:w-[200px] sm:w-[150px] w-[100px] mr-2">
                <video
                  src="/mariostar.mov"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </div>
          </div>
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
  );
};
export default Landing;
