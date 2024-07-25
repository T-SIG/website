import ItemCard from "./ItemCard";
import imgdb from '../../db/imgBucket.js'
import { nanoid } from "nanoid";
function ItemWall() {
  return (
    <div className="grid grid-flow-row p-2 gap-2 bg-emerald-500">
      <span className="w-full text-[1.5rem] inline-flex justify-center items-center font-martian font-medium lg:text-[3rem] md:text-[2rem] ">
        Products at Glance...
      </span>
      <div className="flex flex-wrap justify-center items-center p-4 gap-4">
    {
      imgdb.map((img)=>(<ItemCard key={nanoid()} imgUrl={img?.url} title={img?.title}/>))
    }
      </div>
    </div>
  );
}

export default ItemWall;
