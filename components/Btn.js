import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import React from "react";
import Popup from "reactjs-popup";
import Image from "next/image";
import "reactjs-popup/dist/index.css";
const Btn = () => {
  return (
    <div>
      <a class="btn" href="#popup1">
        <p className="btn-text">ADD</p>
      </a>

      <div id="popup1" class="overlay">
        <div class="popup">
          <div className="pop_box1">
            <div className="Add-experience_text">
              <p className="popup_add_experience">Add an experience</p>
            </div>
            <div className="popup_add_box">
              <div className="add_name_box">
                <p className="small_texts">Name</p>

                <input
                  type="text"
                  name="txt"
                  class="form_box"
                  placeholder="Name"
                />
              </div>
              <div className="add_name_box">
                <p className="small_texts">Description</p>
                <div className="popup_add_box">
                  <input
                    type="text"
                    name="txt"
                    class="form_box_Description"
                    placeholder="Enter a description..."
                  />

                  <div className="form_box_Description1">
                    <div className="upload_box">
                      <div
                        className="uplod_img"
                        style={{ width: 40, height: 40, alignItems: "center" }}
                      >
                        <Image
                          width={40}
                          height={40}
                          src="/Featured icon.png"
                        />
                      </div>
                      <div className="outer_boxOfmsg">
                        <div className="uplpad_msg_box">
                          <p className="uplod_text">
                            <span className="span"> Click to upload</span> or
                            drag and drop
                          </p>
                        </div>
                        <p className="uplod_text">
                          SVG, PNG, JPG or GIF (max. 800x400px)
                        </p>
                      </div>
                      <a class="close" href="#">
                        &times;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn_save">
            <button type="button" className="btn3">
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Btn;
