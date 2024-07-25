import { MapPin } from 'lucide-react'
import { Heart } from 'lucide-react'

function Footer() {
  return (
    <div className='min-w-screen border-t border-primary pt-3 pb-1 text-center flex flex-wrap flex-col gap-2 items-center justify-center md:text-lg lg:text-xl font-medium bg-base-200 text-info'>


      <div className='inline-flex gap-2 justify-center items-center font-light font-mono tracking-wider'>{<MapPin size={20} strokeWidth={1.5}/>}Tsig Lab, Block 1 MJCET</div>
    </div>
  )
}

export default Footer