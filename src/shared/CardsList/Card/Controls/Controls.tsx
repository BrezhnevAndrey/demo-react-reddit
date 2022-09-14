import React from "react";
import { CommentsButton } from "./CommentsButton";
import styles from "./controls.less";
import { KarmaCounter } from "./KarmaCounter";
import { ShareButton } from "./ShareButton";
import { SaveButton } from "./SaveButton";

interface IControlsProps {
  karmaCounter?: number;
}

export function Controls(props: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter karmaCounter = {props.karmaCounter} />

      <CommentsButton text="123" />

      <div className={styles.actions}>
        <ShareButton />

        <SaveButton />
      </div>
    </div>
  );
}
