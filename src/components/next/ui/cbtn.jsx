export default function AnimatedButton() {
  return <button
    className="mt-12 m-auto bg-black shadow-xl text-sm capitalize hover:shadow-sm transition-all duration-200 ease-in-out text-center w-fit rounded-md relative text-white font-semibold group flex gap-2 items-center p-2 before:inset-10 hover:before:inset-0 before:transition-all before:ease-in-out hover:text-black before:bg-white before:rounded-md before:absolute before:content-[''] font-sans"
    type="button"
    onClick={()=>{
      const a = document.createElement("a")
      a.href = "#roadmap"
      a.click()
    }}
  >
    <p className="z-10">See what you will learn</p>
  </button>
}
