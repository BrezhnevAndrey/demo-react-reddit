import React from "react";
import styles from "./genericlist.less";

interface IItem {
  text: React.ReactNode;
  id: string;
  onClick: (id: string) => void;
  className?: string;
  As?: "a" | "li" | "button" | "div";
  href?: string;
}

interface IMyListProps {
  list: IItem[];
}

// export function GenericList({ list }: IMyListProps) {
//   return (
//     <ul>
//       {list.map((item, index) => (
//         <li key={item.id} onClick={() => item.onClick(item.id)}>{item.value}</li>
//       ))}
//     </ul>
//   );
// }


export function GenericList({ list }: IMyListProps) {
  return (
    <>
      {list.map(({ As = "div", className, text, onClick, id, href }) => (
        <As className={className} onClick={() => onClick(id)} key={id} href={href}>
          {text}
        </As>
      ))}
    </>
  );
}
