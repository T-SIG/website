import ItemWall from "../components/ui/ItemWall";
import Showcase from "../components/ui/Showcase";

function Home() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-zinc-100">
      <Showcase />
      <div id="divider" className="bg-emerald-500">
        <svg
          fill="#1d4ed8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
        </svg>
      </div>
      <ItemWall />
      <div className="bg-emerald-500 rotate-180">
        <svg
          fill="rgb(24 24 27)"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 30"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Home;
