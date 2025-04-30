import LetterSwapPingPong from "../text/letter-swap-pingpong-anim";

import Paragraph from "../paragraph";
 import Particles from '../ui/particles';
export default function Intro() {
  return (
    <section className="bg-gray-50 text-black font-['League_Spartan'] py-32 flex w-screen h-screen relative" id="info">
        <Particles
          className={"absolute inset-0"}
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      <div className="m-auto flex flex-col gap-8 items-start max-w-2xl text-black scale-125">
      <LetterSwapPingPong label="what is internprenuer" className="text-5xl font-bold text-gray-900 font-sans capitalize" staggerFrom={"first"}  />
      <Paragraph/>
      </div>
    </section>
  )
}
