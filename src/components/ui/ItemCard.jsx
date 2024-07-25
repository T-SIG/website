/* eslint-disable react/prop-types */

function ItemCard({title="title",imgUrl="https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}) {
  return (
    <div className={` rounded-md bg-[url("${imgUrl}")] grid grid-rows-subgrid gap-2 min-w-[30dvw] w-[20rem] max-w-[100dvw] aspect-video`}>
      <span className="font-semibold text-[2rem] text-center font-martian bg-gradient-to-t -from-10% via-50% from-zinc-950/90 hover:from-zinc-900 via-transparent to-transparent w-full rounded-md h-full place-content-end">{title}</span>
    </div>
  )
}

export default ItemCard