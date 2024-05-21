import { cursor } from "./cursor"
import { home} from "./home"
import { createIcons, Clock,CalendarRange, BookOpenCheck, Handshake, Users, Video, MessagesSquare, FileBadge, CalendarClock, Target, HandCoins, ReceiptIndianRupee, IndianRupee, LockOpen, Linkedin, Github, Instagram, Mail, Building2, } from "lucide"

export function app() {
    const bannerBox = document.getElementById("bannerBox")
    const gridBlob = document.getElementById("grid-blob")

    createIcons({
        icons: {
            Clock,
            CalendarRange,
            BookOpenCheck,
            Handshake,
            Users,
            Video,
            MessagesSquare,
            FileBadge,
            CalendarClock,
            Target,
            HandCoins,
            ReceiptIndianRupee,
            IndianRupee,
            LockOpen,
            Linkedin,
            Github,
            Instagram,
            Mail,
            Building2,
        },
        attrs:{
            class: ["icons","lucide"],
            height: "",
            width: "",
        }
    })

    const icons = document.getElementById("links-box").querySelectorAll(".icons")
    icons.forEach((e)=>{
        let color = e.parentElement.dataset.color;
        e.style.setProperty("--color",color)
    })
}