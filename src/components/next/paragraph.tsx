"use client";
import { TextEffect } from './motion-primitives/text-effect';
import { InteractiveHoverButton } from './magicui/interactive-hover-button';
export  default function InViewBasic() {
  return (
    <div className='max-w-2xl m-auto flex gap-8 items-center flex-col'>

        <TextEffect per="word" speedReveal={1.2} className='text-pretty font-space text-lg tracking-wide leading-10 capitalize'>

            A 6-week online Internship program designed for aspiring coders.
            This program is perfect for individuals who want to transform their passion for coding into a fulfilling web development career.
            Throughout the program, you'll gain mastery over the essential building blocks of web development.
            And by the program's conclusion, you'll have a strong foundation in web development and a portfolio website showcasing your newfound skills.
            Additionally, you'll receive a valuable internship certificate to boost your resume and stand out in the job market.

        </TextEffect>
        <a href="#info">

        <InteractiveHoverButton className='capitalize rounded-xl' onClick={()=>{
          const a = document.createElement("a")
          a.href = "#info"
          a.click()

        }}>
          See what you will learn
        </InteractiveHoverButton>
        </a>

    </div>
  );
}
