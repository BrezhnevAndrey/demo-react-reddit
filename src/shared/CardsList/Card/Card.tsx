import React from "react";
import styles from "./card.less";
import { Controls } from "./Controls";
import { Menu } from "./Menu";
import { Preview } from "./Preview";
import { TextContent } from "./TextContent";

export interface ICardProps {
  author?: string;
  title?: string;
  created?: number;
  ups?: number;
  thumbnail?: string;
  permalink?: string;
  key?: number | string;
  id?: number | string;
}

export function Card(props: ICardProps) {

  return (
    <li className={styles.card}>
      
      <TextContent createdAgo={props.created} title={props.title} userName={props.author} permalink={props.permalink} id={props.id}/>  

      <Preview imgURI={props.thumbnail}/>

      <Menu />

      <Controls karmaCounter={props.ups} />

    </li>
  );
}
