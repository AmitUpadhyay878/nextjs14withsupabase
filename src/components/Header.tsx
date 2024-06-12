'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {useRouter} from "next/navigation"
import Cookies from 'js-cookie';
import { supabase } from "@/lib/supabase";
const Header = () => {
    const [nav, setNav] = useState(false);

    const router = useRouter()
    const currentSession = Cookies.get('sb-ygcjeoqieojbdblhnonx-auth-token');

    useEffect(()=>{
          if(!currentSession){
            router.push("/signin")
          }
    },[currentSession])

  const Links = [
    {
      linki: "/",
      text:"Home"
    },
    {
      linki: "/contact-us",
      text:"Contact Us"
    },
    {
      linki: "/about-us",
      text:"About Us"
    }
  ];

  const logout =async()=>{
    await supabase
    .auth.signOut()

    router.refresh()
    
  }

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-orange-400 nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-3xl font-extrabold font-signature ml-2">
          {/* <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Logo
          </a> */}
         NextJs-14.2 with Supabase
        </h1>
      </div>

      <ul className="hidden md:flex">
        {Links.map((link:any) => (
          <li
          key={link?.linki}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-slate-950 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link?.linki}>{link?.text}</Link>
          </li>
        ))
        }
          {
            currentSession &&
            <li className="nav-links px-4 cursor-pointer capitalize font-medium text-slate-950 hover:scale-105 hover:text-white duration-200 link-underline"><span onClick={logout}>Logout</span></li>
          }
        {/* <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"><Link href="/signin">SignIn</Link></li>
        <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"><Link href="/register">SignUp</Link></li>
        <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"><button onClick={logout}>Logout</button></li> */}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {Links.map((link:any) => {
            return(
              <li
                key={link?.linki}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={() => setNav(!nav)} href={link?.linki}>
                  {link?.text}
                </Link>
              </li>
            )}
          )}
          {
            currentSession &&
            <li className="nav-links px-4 cursor-pointer capitalize font-medium text-slate-950 hover:scale-105 hover:text-white duration-200 link-underline"><span onClick={logout}>Logout</span></li>
          }
           {/* <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"><Link href="/signin">SignIn</Link></li>
           <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"><Link href="/register">SignUp</Link></li> */}
        </ul>
      )}

    </div>
  );
};

export default Header;