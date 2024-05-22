import { cursorAnimation } from "./cursor";
import { handleDecryptionAnimation } from "./handleDecAni";
import { cols, createGrid, rows} from "/src/components/grid"

export const home = document.getElementById("home");


// get grid parent
const grid = document.getElementById("grid")
// // create grid
window.onresize = () =>createGrid(grid)
window.onload = () => createGrid(grid)


// learn more scroll
const divider = document.querySelector("#after-home")
const btns = document.querySelectorAll(".btn")
const eventInfo = document.getElementById("event-info")
btns[1].addEventListener("click",(e)=>{
    window.scrollTo({
        top: eventInfo.offsetTop - divider.offsetHeight,
        left:0,
        behavior:'smooth'
    })
})
// see details scroll
const detailBtn = document.getElementById("detail-btn")
const tilt0 = document.querySelector("#after-event")
const detailSec = document.getElementById("details")
detailBtn.addEventListener("click",(e)=>{
    window.scrollTo({
        top: detailSec.offsetTop - tilt0.offsetHeight,
        left:0,
        behavior:'smooth'
    })
})

// intern animation
const intern = document.getElementById("intern")
const orignalText = intern.dataset.value
intern.onmouseover = e => {handleDecryptionAnimation(intern,orignalText)}

//main cursor animation
cursorAnimation()

//lock animation


