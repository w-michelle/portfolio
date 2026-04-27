import React from "react";
import { JetBrains_Mono } from "next/font/google";
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
});
const Learning = () => {
  return (
    <section
      id="learning"
      className={`${jetbrains.className} relative mt-[5rem] h-full p-4 w-[365px] md:w-[800px] mx-auto`}
    >
      <h2 className="text-grey/30 font-light">/learning</h2>
      <div className="flex items-center my-60">
        <p className="relative text-xs tracking-wider text-center mt-4 font-extralight mr-2">
          THREE.JS
        </p>
        <div className=" absolute right-0 flex items-center">
          <div className=" top-1/2 translate-y-[7px] right-0 border-t-2  border-neutral-200 sm:w-10 md:w-14 mr-2"></div>
          <div className="w-[200px] md:w-[300px] mr-2">
            <video
              src="/mariostar.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
