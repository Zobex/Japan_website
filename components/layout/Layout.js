const { Exo } = require("next/font/google");
import Minicomponents from "../Minicomponents";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";

import Back_drop from "./Back_drop";
const Layout = ({ children }) => {
  return (
    <div className=" content">
      <Back_drop />
      <Navbar />

      {children}
    </div>
  );
};
export default Layout;
