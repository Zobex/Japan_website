import Image from "next/image";
import { Inter } from "next/font/google";
import Minicomponents from "../../components/Minicomponents";
import Link from "next/link";
import Head from "next/head";
import Btn from "../../components/Button";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
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
      note: "GET INTO INTOTHE FUTURE IN",
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
      note: "TURN TIME",
      place: "Kyoto",
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
      note: "TE",
      place: "Kyoto",
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
      note: "TURN TIME",
      place: "Kyoto",
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
      note: "E",
      place: "Kyoto",
      href: "/",
    },
  ];
  return (
    <div className="main_box">
      {/* <div className="add_btn">
            <button className="btn" onClick="add_click">Add</button>
        </div>
    <div class="form-popup" id="myForm">
  <form class="form-container" action="/action_page.php">
  <h1>Login</h1>
  </form>
</div> */}
      <div className="box8">
        <div style={{ width: 507, height: 678 }}>
          {" "}
          <Image
            width={507}
            height={678}
            src="/romeo-a-SlIl9eZjWUc-unsplash 1 (1).png"
          />{" "}
        </div>
        <div className="destination_details">
          <h2>Tokyo</h2>
          <p className="texts1">
            Tokyo, Japan’s busy capital, mixes the ultramodern and the
            traditional, from neon-lit skyscrapers to historic temples. The
            opulent Meiji Shinto Shrine is known for its towering gate and
            surrounding woods. The Imperial Palace sits amid large public
            gardens. The citys many museums offer exhibits ranging from
            classical art (in the Tokyo National Museum) to a reconstructed
            kabuki theater (in the Edo-Tokyo Museum).
          </p>

          <div className="box9">
            <div style={{ width: 75, height: 75 }}>
              {" "}
              <Image
                width={75}
                height={75}
                src="/denys-nevozhai-D68ADLeMh5Q-unsplash 1 (3).png"
              />{" "}
              /
            </div>

            <div className="small_box">
              <p className="mini-headings">Frontend Architect</p>
              <p className="mini-headings2">Mohamed Abd Naseer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn_box">
        <button type="button" className="btn2">
          <a href="./" className="atagOne">
            PREV
          </a>
        </button>
        <button type="button" className="btn2">
          NEXT
        </button>
      </div>

      <Minicomponents items={destination} styleClass="destination-details" />
    </div>
  );
}

// import Image from "next/image";
// import { Inter } from "next/font/google";

// import Link from "next/link";

// import Head from "next/head";

// export default function Home() {
//   return (
//     <div className="main_box">
//       <div className="box8">
//         <div className="main_img">
//           <Image
//             width={507}
//             height={678}
//             src="/romeo-a-SlIl9eZjWUc-unsplash 1 (1).png"
//           />
//         </div>
//         <div className="box3">
//           <h2>Tokyo</h2>
//           <p className="texts1">
//             Tokyo, Japan’s busy capital, mixes the ultramodern and the
//             traditional, from neon-lit skyscrapers to historic temples. The
//             opulent Meiji Shinto Shrine is known for its towering gate and
//             surrounding woods. The Imperial Palace sits amid large public
//             gardens. The city's many museums offer exhibits ranging from
//             classical art (in the Tokyo National Museum) to a reconstructed
//             kabuki theater (in the Edo-Tokyo Museum).
//           </p>

//       <div className="box9">
//         <Image
//           width={75}
//           height={75}
//           src="/denys-nevozhai-D68ADLeMh5Q-unsplash 1 (3).png"
//         />
//         <div className="small_box">
//           <p className="mini-headings">Frontend Architect</p>
//           <p className="mini-headings2">Mohamed Abd Naseer</p>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="btn_box">
//     <button type="button" className="btn2">
//       Prev
//     </button>
//     <button type="button" className="btn2">
//       Next
//     </button>
//   </div>

//     </div>
//   );
// }
