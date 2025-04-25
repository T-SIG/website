import LetterSwapPingPong from "../text/letter-swap-pingpong-anim";
import { Timeline } from "../ui/timeline";

export default function Info() {
  const data = [
    {week : "week-1",title : "HTML", icon : "https://svgl.app/library/html5.svg",content : "Build Strong web foundations"},
    {week : "week-2",title : "CSS", icon : "https://svgl.app/library/css.svg", content : "Design clean, responsive websites"},
    {week : "week-3",title : "JavaScript", icon : "https://svgl.app/library/javascript.svg", content:"Brain for the web"},
    {week : "week-4",title : "Tailwind",icon : "https://svgl.app/library/tailwindcss.svg", content : "Streamline your UI design"},
    {week : "week-5",title : "React", icon : "https://svgl.app/library/react_light.svg", content : "Dynamic scalable UI's"},
    {week : "week-6",title : "Projects", icon : "", content : ""}
  ]

  return (
    <section className="bg-spline-blue p-32">
      <div className="max-w-2xl m-auto flex flex-col gap-8 items-start">
      <LetterSwapPingPong label="Road Map" className="text-5xl font-bold font-sans capitalize m-auto cursor-default" staggerFrom={"first"}  />
      </div>
      <div className="relative w-full overflow-clip">
      <Timeline data={data}/>
      </div>
    </section>
  )
}
