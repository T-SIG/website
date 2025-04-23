import {AtSign as Mail} from "lucide-react"
import Link from "next/link";
import { SiInstagram, SiLinkedin } from "react-icons/si";

export default function Footer() {
  const data =[{
    icon : Mail,
    href : "mailto:tsig@mjcollege.ac.in"
  },{
    icon : SiInstagram,
    href : "https://www.instagram.com/t.sig.mjcet"
  },{
    icon: SiLinkedin,
    href : "https://www.linkedin.com/company/t-signature-mjcet/"
  }]
  return (
    <footer className="flex flex-col gap-2 py-2 items-center font-mono bg-spline-blue border-t border-white/50 uppercase tracking-wide">
      <div className="flex items-center justify-center gap-3 flex-wrap">

      {data.map((item,index)=>{
        const Icon = item.icon
        return (<Link target="_blank" key={item.icon.name+index} href={item.href} className="text-black/60 size-4">
          <Icon className="w-4 h-4"/>
        </Link>)
      })}
      </div>

      <div className="inline-flex gap-1 text-xs">
      copyright
      <span>
      @
      </span>
        <span>{ new Date().getFullYear() }</span>
      </div>
    </footer>
  )
}
