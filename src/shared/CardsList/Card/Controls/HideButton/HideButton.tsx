import React from "react";
import styles from "./hidebutton.less";
import { Icons } from "../../../../Icons";

export function HideButton(props: { className?: string }) {
  return (
    <button
      className={props.className ? props.className : styles.commentsButton}
    >
      <Icons name="blockIcon" size={{}} />
      <span>Скрыть</span>
    </button>
  );
}
