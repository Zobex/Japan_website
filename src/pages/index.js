import Image from "next/image";
import { Inter } from "next/font/google";
import Minicomponents from "../../components/Minicomponents";
import Link from "next/link";

import Head from "next/head";

export default function Home() {
  const destination = [
    {
      icon: (
        <div style={{ width: 75, height: 75 }}>
          <Image
            width={75}
            height={75}
            src="/denys-nevozhai-D68ADLeMh5Q-unsplash 1 (4).png"
          />
        </div>
      ),
      note: "GET INTOTHE FUTURE IN",
      place: "Tokyo",
      href: "/",
    },
    {
      icon: (
        <div style={{ width: 75, height: 75 }}>
          <Image
            width={75}
            height={75}
            src="/zhijian-dai-MUUnrhZ0xmA-unsplash 1.png"
          />
        </div>
      ),
      note: "TURN BACK THE TIME",
      place: "Kyoto",
      href: "/",
    },

    {
      icon: (
        <div style={{ width: 75, height: 75 }}>
          <Image
            width={75}
            height={75}
            src="/zhijian-dai-nCGpqcaSRnU-unsplash 1.png"
          />
        </div>
      ),
      note: "GET IMPRESSED BY",
      place: "Osaka",
      href: "/",
    },
    {
      icon: (
        <div style={{ width: 75, height: 75 }}>
          <Image
            width={75}
            height={75}
            src="/sorasak-_UIN-pFfJ7c-unsplash 1 (1).png"
          />
        </div>
      ),
      note: "GET INTOTHE FUTURE IN",
      place: "Nara",
      href: "/",
    },
    
  ];
  return (
    <div className="main_box">
      <div className="japan">
        <h1> JAPAN</h1>
      </div>
      <Minicomponents items={destination} styleClass="destination1" />

      <div className="box2">
        <div style={{ width: 507, height: 678 }}>
          <Image
            width={507}
            height={678}
            src="/romeo-a-SlIl9eZjWUc-unsplash 1 (1).png"
          />
        </div>
        <div className="box3">
          <h2>Tales of Japan</h2>
          <p className="texts">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
       
          <div className="box4">
            <div style={{ width: 75, height: 75 }}>
              {" "}
              <Image
                width={75}
                height={75}
                src="/denys-nevozhai-D68ADLeMh5Q-unsplash 1 (3).png"
              />
            </div>

            <div className="small_box">
              <p className="mini-headings">Frontend Architect</p>
              <p className="mini-headings2">Mohamed Abd Naseer</p>
            </div>
          </div>
          <div className="box5">
            <Link  href="./details"  className="atag">
              Tokyo
            </Link>
            <Link  href="" className="atag">Kyto</Link>
            <Link href="" className="atag">Osaka</Link>
            <Link href="" className="atag">Nara</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
