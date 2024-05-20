import { cursor } from "./cursor"
import { home} from "./home"
import { createIcons, Clock,CalendarDays } from "lucide"

export function app() {
    const bannerBox = document.getElementById("bannerBox")
    const gridBlob = document.getElementById("grid-blob")

    createIcons({
        icons: {
            Clock,
            CalendarDays
        },
        attrs:{
            class: ["icon","lucide"]
        }
    })
}