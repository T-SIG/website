/* eslint-disable react/prop-types */

function TextBanner({text="Text",className=""}) {
  return (
    <div className={`inline-flex justify-center items-center hover:-rotate-1 ease-linear duration-200 hover:bg-yellow-500 font-martian border min-w-[25dvw] text-center rounded-md text-[1.5rem] p-3 font-semibold tracking-wider bg-slate-200/30 ${className}`}>{text}</div>
  )
}

export default TextBanner