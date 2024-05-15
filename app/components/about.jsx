import React from 'react'
import { JetBrains_Mono } from "next/font/google";
const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
  });
const About = () => {

  return (
    <section className={`${jetbrains.className} relative mt-[5rem] h-full p-4 w-[365px] md:w-[800px] mx-auto text-grey`}>
    <div className=" text-sm font-thin w-full text-center ">
      <p className="font-bold mb-2 text-center text-grey/30 tracking-wider">Story</p>
      <p>I&apos;ve always enjoyed creating and have been curious about coding. I decided to pivot from business to programming, blending my interest in both areas. I love turning my ideas and designs into fully functional applications. When I&apos;m not coding, I enjoy learning new recipes and practicing yoga.
      </p>
    </div>
    </section>
  )
}

export default About