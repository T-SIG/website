import Intro from '../sections/intro';
import Info from '../sections/info';
import Spline from '@splinetool/react-spline';
import SplineScene from '../../spline.jsx'
import "../../../styles/global.css"

export default function Home() {
  return (
    <main>
      <div className='min-h-screen flex flex-col items-center justify-center bg-[#BBDDFD] '>
      <section className='h-[100vh] max-h-screen overflow-x-hidden w-svw max-w-[100vw]'>
        <SplineScene/>
         <div className="md:1/6 absolute right-0 bottom-0 z-1 h-14 w-full bg-[#BBDDFD] sm:w-1/4" />
      </section>
      </div>
      <Intro/>
      <Info/>
    </main>
  );
}
