// import LetterSwapPingPong from "@/fancy/components/text/letter-swap-pingpong-anim";

import { SiCss3, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";

import { CardSpotlight } from "../ui/card-spotlight";
import LetterSwapPingPong from "../text/letter-swap-pingpong-anim";

export default function Info() {
const data = [
  {
    title: "HTML",
    description: "html",
    icon : SiHtml5
  },
  {
    title: "CSS",
    description: "css",
    icon : SiCss3
  },
  {
    title: "javascript",
    description: "js",
    icon : SiJavascript
  },
  {
    title: "tailwind",
    description: "tailwind",
    icon : SiTailwindcss
  },{
    title: "react",
    description: "react",
    icon : SiReact
  },
  ].reverse()
  return (
    <section className="bg-spline-blue min-h-screen p-32 flex flex-col gap-8 items-center justify-center" id="info">
      <LetterSwapPingPong label="You'll learn about" className="text-5xl font-bold font-space capitalize" staggerFrom={"first"}  />
      <div className="flex flex-wrap w-xl justify-center gap-8">
        <div className="flex flex-wrap items-center justify-center-safe gap-8">
          {data.map((item,idx)=> {
            const Icon = item.icon
            return(
              <CardSpotlight color="#b1c1f9" key={idx} title={item.title} className=" backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-lg size-36 flex items-center justify-center flex-col gap-2 capitalize" >
              <p className="text-xl font-bold relative z-20 mt-2">
                  <Icon className="size-12"/>
              </p>
              <p className="text-xl relative cursor-default z-20 mt-2">
                { item.title}
              </p>

                </CardSpotlight>)
          })}

        </div>


      </div>

    </section>
  )
}
