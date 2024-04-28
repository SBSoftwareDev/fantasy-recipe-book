import { Link } from "react-router-dom";
import Search from "./Search";
import Avatar from "./Avatar";

import FFLogo from "../assets/FF_Logo.svg";
import { useState } from "react";

export default function Header () {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //Dummy tester state

  return (
      <div className="drawer z-10">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 

      {/* Fake header under fixed header for spacing purposes */}
      <div className="w-full h-[4rem] lg:h-[6rem]"></div> 
      
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-orange-100 fixed">

          {/* Mobile Navbar */}
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost text-slate-950">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 

          <div className="flex-1 px-2 mx-2 justify-end lg:hidden">
              {isLoggedIn && <Avatar />}
          </div>

          {/* Desktop Navbar */}
          <div className="flex-none hidden lg:flex w-full">
            <ul className="menu menu-horizontal p-0 m-0 w-full items-center grid grid-cols-3">
              {/* Navbar menu content here */}
              <li className="p-0 justify-center"><Link to="/" className="w-24"><img src={FFLogo} alt="Logo of fantasy foods"/></Link></li>

              <li className="justify-center"><Search /></li>

              <div className="flex justify-self-end"> 
                <li className="justify-center"><Link to="create/" className="link link-hover text-slate-800 text-lg">Post Recipe</Link></li>
                {/* If logged in, create post link and show avatar. If not logged in, show create, log in, sign up */}
                {isLoggedIn ? <li className="mr-4"><Avatar /></li> :
                    <>
                      <li><Link to="login/" className="link link-hover text-slate-800 text-lg">Log In</Link></li>
                      <li><Link to="register/" className="link link-hover text-slate-800 text-lg">Sign Up</Link></li>
                    </>
                }
              </div>

            </ul>
          </div>
        </div>
      </div>  
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 min-h-full bg-[#fffef6] text-default">
          {/* Sidebar content here */}
          <Link to="/"><img src={FFLogo} alt="Logo of fantasy foods" className="h-24 w-24 mb-4"/></Link>
          <Link to="/"><li className="my-2">Home</li></Link>
          <Link to="/"><li className="my-2">Random Recipe</li></Link>
          <Link to="/"><li className="my-2">Log In</li></Link>
          <Link to="register/"><li className="my-2">Sign Up</li></Link>
        </ul>
      </div>
    </div>
  );
}