const { Exo } = require("next/font/google");
import Minicomponents from "../Minicomponents";
import Navbar from "../Navbar";
import BackDrop from "./BackDrop";
import SearchBar from "../SearchBar";

import Back_drop from "./BackDrop";
const Layout = ({ children }) => {
  return (
    <div className=" content">
      <BackDrop />
      <Navbar />

      {children}
    </div>
  );
};
export default Layout;
