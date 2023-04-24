import Link from "next/link";
import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";
const NavigationItems = ({ href, text, active }) => {
  return (
    <Link legacyBehavior href={href}>
      <a className="navLink">{text}</a>
    </Link>
    
  );
};

export default NavigationItems;
