import React from "react";
import styles from "./complainbutton.less";
import { Icons } from "../../../../Icons";

export function ComplainButton(props: { className?: string, text?: string}) {
  return (
    <button
      className={props.className ? props.className : styles.commentsButton}
    >
      <Icons name="warningIcon" size={{}} />
      <span>{props.text}</span>
    </button>
  );
}
