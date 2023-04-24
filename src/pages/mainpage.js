import Image from "next/image";
import { Inter } from "next/font/google";

import Link from "next/link";

import Head from "next/head";

export default function Home() {
  return (
    <div className="main_box1">
      <div className="japan">
        <h1> JAPAN</h1>
      </div>
      <div className="box2">
        <div className="main_img">
          <div style={{ width: 507, height: 678 }}>
            <Image src="/romeo-a-SlIl9eZjWUc-unsplash 1 (1).png" />
          </div>
        </div>
        <div className="box3">
          <h2>Tales of Japan</h2>
          <p className="texts">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
          <div className="bo"></div>
          <div className="box4">
            <Image
              width={75}
              height={75}
              src="/denys-nevozhai-D68ADLeMh5Q-unsplash 1 (3).png"
            />
            <div className="small_box">
              <p className="mini-headings">Frontend Architect</p>
              <p className="mini-headings2">Mohamed Abd Naseer</p>
            </div>
          </div>
          <div className="box5">
            <a className="atag">Tokyo</a>
            <a className="atag">Kyto</a>
            <a className="atag">Osaka</a>
            <a className="atag">Nara</a>
          </div>
        </div>
      </div>
    </div>
  );
}
