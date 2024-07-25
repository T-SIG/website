/* eslint-disable react/prop-types */

function ItemCard({title="title",imgUrl}) {
  const url = imgUrl || "https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div className={` rounded-md grid grid-rows-subgrid gap-2 min-w-[30dvw] w-[20rem] max-w-[100dvw] aspect-video relative`}>
  
      <img src={url} alt={title} className=" rounded-md" />
    </div>
  )
}

export default ItemCard