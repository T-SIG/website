// import LetterSwapPingPong from "@/fancy/components/text/letter-swap-pingpong-anim";

import LetterSwapPingPong from "../text/letter-swap-pingpong-anim";

import Paragraph from "../paragraph";
export default function Intro() {
  return (
    <section className="bg-spline-blue min-h-screen p-32">
      <div className="max-w-2xl m-auto flex flex-col gap-8 items-start">

      <LetterSwapPingPong label="what is internprenuer" className="text-5xl font-bold font-space capitalize" staggerFrom={"first"}  />
      {/* <p className="-mb-8 font-mono uppercase border">1 - 31 may 2025 </p> */}
      <Paragraph/>
      </div>
    </section>
  )
}
