import ItemWall from "../components/ui/ItemWall";
import Showcase from "../components/ui/Showcase";

function Home() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-zinc-100">
      <div className="h-screen flex items-center justify-center bg-blue-700">
        <Showcase />
      </div>

      <div id="divider" className="bg-emerald-500">
        <svg
          fill="rgb(29 78 216)"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <ItemWall />
      <div class="bg-zinc-900">
        <svg
          fill="rgb(16 185 129)"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
             d="M1200 0L0 0 598.97 114.72 1200 0z" >
          </path>
        </svg>
      </div>
    </div>
  );
}

export default Home;
