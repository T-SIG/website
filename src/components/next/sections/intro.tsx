import LetterSwapPingPong from "../text/letter-swap-pingpong-anim";

import Paragraph from "../paragraph";
export default function Intro() {
  return (
    <section className="bg-spline-blue  border-red-600 p-32 font-['League_Spartan']">
      <div className="max-w-2xl m-auto flex flex-col gap-8 items-start">
      <LetterSwapPingPong label="what is internprenuer" className="text-5xl font-bold font-sans capitalize" staggerFrom={"first"}  />
      <Paragraph/>
      </div>
    </section>
  )
}
