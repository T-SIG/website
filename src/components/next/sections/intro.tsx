import LetterSwapPingPong from "../text/letter-swap-pingpong-anim";

import Paragraph from "../paragraph";
export default function Intro() {
  return (
    <section className="bg-gray-900 font-['League_Spartan'] py-32 flex w-screen h-screen">
      <div className="m-auto flex flex-col gap-8 items-start max-w-2xl">
      <LetterSwapPingPong label="what is internprenuer" className="text-5xl font-bold text-gray-50 font-sans capitalize" staggerFrom={"first"}  />
      <Paragraph/>
      </div>
    </section>
  )
}
