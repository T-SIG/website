"use client";
import  AnimatedButton  from './ui/cbtn.jsx';
export  default function InViewBasic() {
  return (
    <div className='flex gap-px flex-col p-1'>
      <p className='text-pretty font-sans text-lg leading-8 tracking-wide text-gray-50'>
          A beginner friendly virtual web development internship and training program offered in collaboration between <strong>TSIG</strong> and <strong>TECHSATH</strong>, A Tech Company that handles web dev projects for clients.
          <br />
         You will work on real word projects and gain experience in the field of web development.
         At the end of the internship, you will receive a certificate of completion.
      </p>
          <AnimatedButton />
    </div>
  );
}
