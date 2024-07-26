import { Linkedin } from "lucide-react";
import { AtSign } from "lucide-react";
import { Globe } from "lucide-react";
import { Instagram } from "lucide-react";
import { Copyright } from "lucide-react";
import { MapPin } from "lucide-react";

function Footer() {
  const date = new Date();
  return (
    <div className="w-full min-h-9 bg-zinc-900 text-zinc-100 flex flex-wrap justify-center items-center text-sm flex-row font-martian gap-2 p-2">
      <span className="inline-flex gap-6 mb-3">

      <a target="_blank" href="mailto:tsig@mjcollege.ac.in">{<AtSign size={24} strokeWidth={1} className="foot-icon hover:text-green-500" />}</a>
      <a target="_blank" href="https://tsigmjcet.in/">{<Globe size={24} strokeWidth={1} className="foot-icon hover:text-yellow-500" />}</a>   
      <a target="_blank" href="https://www.instagram.com/t.sig.mjcet?igsh=MTRoY3gwaXFmaTE4Mw==">{<Instagram size={24} strokeWidth={1} className="hover:text-pink-500 foot-icon" />}</a>
      <a target="_blank" href="https://www.linkedin.com/company/t-signature-mjcet/">{<Linkedin size={24} strokeWidth={1} className="foot-icon hover:text-blue-600" />}</a>
      </span>
      <span className="w-full inline-flex items-center justify-center gap-2 uppercase font-martian font-light">
        {<Copyright size={16} strokeWidth={1.5} />}
        {`${date.getFullYear()} tsig`}
      </span>
      <span className="w-full inline-flex items-center justify-center gap-2 uppercase font-martian font-light">
        {<MapPin size={16} strokeWidth={1.5} />} TSIG lab, Block 1 - mjcet
      </span>
    </div>
  );
}

export default Footer;
