import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import {ImGithub} from 'react-icons/im'
const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
  });
  const inter = Inter({
    subsets: ["latin"],
  });

const Contact = () => {
    return (
        <section id="contact" className={`${jetbrains.className} mt-[5rem] h-screen p-4 w-[365px] md:w-[800px] mx-auto`}>
        <h2 className="text-grey/30">/contact</h2>
        <div className="h-screen flex flex-col gap-4 items-center justify-center">
            <h3 className="tracking-widest">michelle.w.dev@gmail.com</h3>
            <Link href="https://github.com/w-michelle" aria-label="github profile" target="_blank">
      <ImGithub className="text-[30px]" />
      </Link>  
      <Link aria-label="link to snake game" className="text-xs mt-4 text-gray-400/40 hover:text-[#001bff]" href="https://snake-game-mw.vercel.app/" target="_blank">
                <span>BORED? BEAT A HIGHSCORE</span>
            </Link>
        </div>
     
        </section>
    )
}

export default Contact