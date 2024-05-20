// import anime from 'animejs/lib/anime.es.js'

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
const detailBtn = document.getElementById("detail-btn")


// intern animation
const intern = document.getElementById("intern")
intern.onmouseover = e => {handleDecryptionAnimation(intern,"Internpreneur")}
// enroll now btn
//cursor animation
cursorAnimation()
// // scale animation
// home.addEventListener("click",handleAnimation)

// function handleAnimation(event) {
//     anime({
//         targets: '.tile',
//         scale: [
//                 {
//                     value: .01,
//                     easing: 'easeOutSine',
//                     duration: 800
//                 },
//                 {
//                     value: 1, 
//                     easing: 'easeInOutQuad', 
//                     duration: 500
//                 }
//             ],
//             delay: anime.stagger(50,
//                 {
//                     grid: [
//                         cols,
//                         rows
//                     ],
//                     from:event.target.dataset.tileindex
//                 },
//             )
//     });
//}

