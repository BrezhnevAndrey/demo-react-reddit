import React from "react";
import styles from "./preview.less";

interface IPreviewProps {
  imgURI?: string;
}

export function Preview( {imgURI}: IPreviewProps ) {
  (imgURI?.endsWith(".png") ||  imgURI?.endsWith(".jpg")) ? imgURI : imgURI = undefined 
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={imgURI ? imgURI : "https://st2.depositphotos.com/1757635/5948/i/600/depositphotos_59485295-stock-photo-businessman-working-on-laptop.jpg"}></img>
    </div>
  );
}
