import Link from "next/link";
import Image from "next/image";
import NavigationItems from "./NavigationItems";
import SearchBar from "./SearchBar";
import Btn from "./Btn";
import React, {useEffect, useState} from "react";
const MENU = [
  {
    text: "HISTORY OF JAPAN",
    href: "/",
  },
  {
    text: "DESTINATIONS",
    href: "/DESTINATIONS",
  },
  {
    text: "EXPERIENCES",
    href: "/EXPERIENCES",
  },
];
const Navbar = () => {
  const [Navmenu_list , setNavbar] = useState (false);
  const changeBackground = () => {
    //console.log(window.scrollY)
    if (window.scrollY >= 80){
      setNavbar(true)
    } else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground)
  return (
    <header>
      <nav>
   
        <div className={Navmenu_list ? 'Navmenu_list active': 'Navmenu_list'}>
          <div className="Navmenu_list1">
            <div className="navOne">
              {MENU.map((menu, index) => 
                    <NavigationItems key={index} {...menu} />
            
            ) }
              <SearchBar />
            </div>
            <Btn />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
