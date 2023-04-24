import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import Link from "next/link";
const Add_form = () => {
  return (
    <div>
      <h1>Popup/Modal Windows without JavaScript</h1>
      <div class="box">
        <a class="button" href="#popup1">
          Let me Pop up
        </a>
      </div>

      <div id="popup1" class="overlay">
        <div class="popup"></div>
      </div>
    </div>
  );
};

export default Add_form;
