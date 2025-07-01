"use client";
import "../../../styles/validate.css";
import "../../../styles/global.css";

export default function Navbar() {
  
  return (
    
    <nav className="navbar h-35 sm:h-40 md:h-14">
      <a href="https://tsigmjcet.in/">
        <div className="navbar-left">
          <img
            src="/favicons/favicon-96x96.png"
            alt="Canvas Logo"
            className="logo"
          />
          <span className="text-2xl tracking-[8px] -mr-[18px] ml-[5px] font-black">
            tsig
          </span>
        </div>
      </a>
      {/* <div className="navbar-right">
        <a href="#">Sign In</a>
        <a href="#">Create Account</a>
      </div> */}
    </nav>
  );
}
