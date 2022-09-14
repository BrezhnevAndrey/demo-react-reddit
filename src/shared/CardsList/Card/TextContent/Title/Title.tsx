import React from "react";
import { Link } from "react-router-dom";
import styles from "./title.less";

interface ITitleProps {
  titleText?: string;
  permalink?: string;
  id?: string | number;
}

export function Title(props: ITitleProps) {

  return (
    <h2 className={styles.title}>
      <Link
        to={`/posts/${props.id}`}
        className={styles.postLink}
      >
        {props.titleText
          ? `${props.titleText}`
          : "Тут нет никакой нтересной для вас информации"}
      </Link>
    </h2>
  );
}
