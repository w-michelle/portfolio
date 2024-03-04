import { Inter, JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
  });
  const inter = Inter({
    subsets: ["latin"],
  });

  const projectInfo = [
 {
        title:"CYBER BUBBLE",
        stacks: "[React/Next.js/TailwindCSS/Firebase]",
        imgSrc: "/cb-home.png",
        siteUrl: "https://cyberbubble.vercel.app",
        github: "https://github.com/w-michelle/cyberbubble"

    },
    {
        title: "START FROM ZERO",
        stacks: "[Typescript/React/Redux/Next.js/TailwindCSS/Prisma/PostgreSQL/Stripe]",
        imgSrc:"/sfz.png",
        siteUrl: "https://startfromzero.vercel.app/",
        github:"https://github.com/w-michelle/startfromzero"
    },
    {
        title: "TRAVELGRAM",
        stacks: "[React/Next.js/TailwindCSS/Firebase]",
        imgSrc:"/travel.png",
        siteUrl: "https://mytravelgram.vercel.app/",
        github:"https://github.com/w-michelle/travelgram"
    },
    {
        title: "I DON'T KNOW WHAT TO EAT",
        stacks: "[React/TailwindCSS/Express/YelpApi]",
        imgSrc:"/idkwte.png",
        siteUrl: "https://idontknowwhattoeat.vercel.app",
        github:"https://github.com/w-michelle/idkwte"
    },
 
]
  
const Projects = () => {
    return (
        <section id="projects" className={`${jetbrains.className} relative mt-[5rem] h-full p-4 w-[365px] md:w-[800px] mx-auto`}>
            <h2 className="text-grey/30 font-light">/projects</h2>
           
            {
                projectInfo.map((project) => (
                <div key={project.title} className="my-[8rem]">
                    <div className="flex gap-4 flex-wrap md:flex-nowrap md:justify-between">
                     <div className="flex flex-col gap-3"> 
                        <p className="text-xs break-words w-[310px] tracking-widest">{project.stacks}</p>
                        <h3 className="tracking-wider">{project.title}</h3>
                        <Link href={project.siteUrl} aria-label="view project" target="_blank">
                              <button className=" text-xs w-[100px] py-2 px-4 bg-[#C6F6D5] text-[#22543D] cursor-pointer hover:bg-[#22543D] hover:text-[#C6F6D5] transition">
                                 VIEW SITE
                             </button>
                        </Link>
                        <Link href={project.github} aria-label="view github" target="_blank">
                            <button className="navbutton text-xs w-[100px] py-2 px-4 border-[1px] border-black ">
                            GITHUB
                            </button>
                        </Link>
                     </div>
                      
                        <Link href={project.siteUrl} aria-label="view project" target="_blank" className="relative w-[300px] h-[200px] md:w-[380px] md:h-[250px] mr-5">
                            <Image src={project.imgSrc} fill alt="Project Image" className="object-cover shadow-custom rounded-md" />
                        </Link>
                    </div>
                </div>
                ))
            }
 
        </section>
    )
}

export default Projects;