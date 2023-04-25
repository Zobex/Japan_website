import Link from "next/link";
import Image from "next/image";
import ScrollComponent from "./ScrollComponent";

const Minicomponents = ({ items, styleClass }) => {
  return (
    <div className={`w-100 ${styleClass}`}>
      {items.map((menu, ame, idx) => {
        return (
          <div key={menu.note}>
            <ScrollComponent {...menu} />
          </div>
        );
      })}
    </div>
  );
};

export default Minicomponents;
