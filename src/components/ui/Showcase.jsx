import TextBanner from "./TextBanner";
import { tags } from "../../db/tags";
import { nanoid } from "nanoid";
function Showcase() {
  const handleClick = () => {
    let pos = document.getElementById("divider");
    window.scrollTo({
      top: pos.offsetTop ,
      left: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <div className="p-2 pb-4 w-full bg-blue-700 text-white flex flex-wrap flex-row justify-center gap-4">
      <span className='min-w-full text-[2.5rem] lg:text-[5rem] font-bold text-center p-2'>
        3D Print your Designs
      </span>
      <span className='min-w-full text-[1.5rem] lg:text-[2.5rem] text-center p-2'>Custom Print Your desired 3D Objects</span>
      {tags.map((item) =>
        item === "many more..." ? (
          <TextBanner className="w-[35dvw]" text={item} key={nanoid()} />
        ) : (
          <TextBanner text={item} key={nanoid()} />
        )
      )}
      <span className="w-full inline-flex justify-center items-center p-2 font-martian mt-5 ">
        <button
          onClick={handleClick}
          className="bg-yellow-500 text-zinc-900 p-4 text-xl font-semibold rounded-md hover:bg-green-600 hover:rotate-1 hover:text-white ease-linear duration-200"
        >
          Order your Print
        </button>
      </span>
    </div>
  );
}

export default Showcase;
