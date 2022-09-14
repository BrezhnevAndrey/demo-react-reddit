import React from "react";
import styles from "./text.less";
import classNames from "classnames";

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColors {
  black = "black",
  orange = "orange",
  green = "green",
  white = "white",
  greyF4 = "greyF4",
  greyF3 = "greyF3",
  greyD9 = "greyD9",
  greyC4 = "greyC4",
  grey99 = "grey99",
  grey66 = "grey66",
}

interface ITextProps {
  size: TSizes;
  As?: "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";
  mobileSize?: TSizes;
  tebletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColors;
  children: React.ReactNode;
}

export function Text(props: ITextProps) {
  const {
    As = "span",
    size,
    color = EColors.black,
    children,
    mobileSize,
    tebletSize,
    desktopSize,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tebletSize}`]]: tebletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
  );

  return <As className={classes}>{children}</As>;
}
