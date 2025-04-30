import LetterSwapPingPong from "../text/letter-swap-pingpong-anim";
import TmL from "../ui/tl2"
import "../../../styles/mainSect.css"
import { cn } from "../../../lib/utils";
export default function Info() {

  return (
    <section className="bg-black min-h-screen w-screen pt-32" id="roadmap">
      <div className="max-w-2xl m-auto flex flex-col gap-8 items-start">
      <LetterSwapPingPong label="Road Map" className="text-5xl font-bold font-sans text-gray-50 capitalize m-auto cursor-default" staggerFrom={"first"}  />
      </div>
      <div className="relative w-full">
      <TmL/>
      </div>
      <div className="m-auto flex items-center justify-center bg-black py-12">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeulHoIlovJ0llFgXQfrgeQeTOjVX6_bryhfSH1zN0aHkslhA/viewform?pli=1">
      <button type="button" className="btn" name="form-link">
        <strong className="fontl">Register Here</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>
        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>
        </a>
      </div>
    </section>
  )
}
