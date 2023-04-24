import Link from "next/link";
import Image from "next/image";
import NavigationItems from "./NavigationItems";
import SearchBar from "./SearchBar";
import Btn from "./Btn";
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
const navbar = () => {
  return (
    <header>
      <nav>
   
        <div className="Navmenu_list">
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

export default navbar;
