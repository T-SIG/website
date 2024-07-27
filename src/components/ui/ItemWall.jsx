import ItemCard from "./ItemCard";
import imgdb from "../../db/imgBucket.js";
import {ShoppingCart} from 'lucide-react'
import { nanoid } from "nanoid";
function ItemWall() {
  return (
    <div className="flex flex-wrap p-2  gap-2 bg-emerald-500">
      <span className="w-full text-[1.5rem] inline-flex justify-center items-center font-martian font-medium lg:text-[3rem] md:text-[2rem]">
        Products at Glance
      </span>
      <div className="flex flex-wrap justify-center items-center p-4 gap-4">
        {imgdb.map((img) => (
          <ItemCard key={nanoid()} imgUrl={img?.url} title={img?.title} />
        ))}
      </div>
      <a
        href="https://forms.gle/C7gpEsirGBXbBzfv9"
        className="flex flex-wrap items-center justify-center w-fit m-auto bg-yellow-500 text-zinc-900 p-4 text-xl font-semibold rounded-md hover:bg-blue-600 hover:rotate-1 hover:text-white ease-linear duration-200 animate-buttonheartbeat mb-3"
      >
        {<ShoppingCart className="inline-block mr-2" strokeWidth={2.5} />}
        <span>Place Your Order</span>
      </a>

    </div>
  );
}

export default ItemWall;
