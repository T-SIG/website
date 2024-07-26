import TextBanner from "./TextBanner";
import { tags } from "../../db/tags";
import { nanoid } from "nanoid";
import { ArrowDown } from "lucide-react";
function Showcase() {
  const handleClick = () => {
    let pos = document.getElementById("divider");
    window.scrollTo({
      top: pos.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-2 pb-4 w-full bg-blue-700 text-white flex flex-wrap flex-row justify-center gap-4">
      <span className="min-w-full text-[2rem] lg:text-[3rem] font-bold text-center bg-clip-text text-transparent bg-gradient-to-r to-[#FAD961] from-[#F76B1C] uppercase">
        tsig 3d corner
      </span>
      <span className="min-w-full text-[2.5rem] lg:text-[5rem] font-bold text-center p-2 bg-clip-text text-transparent bg-gradient-to-r from-[#FAD961] to-[#F76B1C]">
        3D Print your Designs
      </span>
      <span className="min-w-full text-[1.5rem] lg:text-[2.5rem] text-center p-2">
        Custom Print Your desired 3D Objects
      </span>
      <div className="w-full inline-flex items-center justify-center">
        <a href="#">
          <div className="w-fit rounded-xl bg-yellow-500 bg-gradient-to-br to-[#FAD961] from-[#F76B1C] p-4 text-center font-semibold tracking-tight text-zinc-900 font-martian transition-all duration-200 ease-linear hover:scale-105 hover:rotate-2 text-[0.9rem] md:text-[1.1rem] lg:text-[1.4rem]">
            Pre-order now to get 30% discount
          </div>
        </a>
      </div>
      {tags.map((item) =>
        item === "many more..." ? (
          <TextBanner className="w-[35dvw]" text={item} key={nanoid()} />
        ) : (
          <TextBanner text={item} key={nanoid()} />
        )
      )}
      <span className="w-full inline-flex justify-center items-center p-2 font-martian">
        <button
          onClick={handleClick}
          className="group/button inline-flex items-center justify-center overflow-hidden rounded-md transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/50 gap-2 bg-yellow-500 text-zinc-900 p-4 text-xl font-semibold hover:bg-green-600 hover:text-white "
        >
          <span>see photos</span>
          {<ArrowDown strokeWidth={2.5} />}
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div className="relative h-full w-8 bg-white/20" />
          </div>
        </button>
      </span>
    </div>
  );
}

export default Showcase;
