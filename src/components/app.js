import { cursor } from "./cursor"
import { home} from "./home"
import { createLucideIcons } from "./createIcons"

export function app() {
    const bannerBox = document.getElementById("bannerBox")
    const gridBlob = document.getElementById("grid-blob")
    const iconsSVG = createLucideIcons


    // footer hover color
    const icons = document.getElementById("links-box").querySelectorAll(".icons")
    icons.forEach((e)=>{
        let color = e.parentElement.dataset.color;
        e.style.setProperty("--color",color)
    })
}