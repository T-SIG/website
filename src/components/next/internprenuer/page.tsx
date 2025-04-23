import Spline from '@splinetool/react-spline';
import Intro from '../sections/intro';
import Info from '../sections/info';

export default function Home() {
  return (
    <main>
      <section className='relative min-h-screen'>
         <div className='absolute bottom-0 right-0 w-64 h-16 z-10 bg-spline-blue'/>
      <Spline
      className='h-full w-full'
        scene="https://prod.spline.design/40xRuAU4xnrTOLiU/scene.splinecode"
      />
      </section>
      <Intro/>
      <Info/>
    </main>
  );
}
