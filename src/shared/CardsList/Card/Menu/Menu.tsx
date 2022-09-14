import React from "react";
import { Dropdown } from "../../../Dropdown";
import { GenericList } from "../../../GenericList";
import { merge } from "../../../utils/js/merge";
import {
  generateRandomString,
} from "../../../utils/react/generateRandomIndex";
import { CommentsButton } from "../Controls/CommentsButton";
import { ComplainButton } from "../Controls/ComplainButton";
import { HideButton } from "../Controls/HideButton";
import { SaveButton } from "../Controls/SaveButton";
import { ShareButton } from "../Controls/ShareButton";
import styles from "./menu.less";
import { Icons } from "../../../Icons/Icons";

const LIST = [
  {
    text: (
      <CommentsButton className={styles.menuItemElement} text="Комментарии" />
    ),
    className: `${styles.menuItem} ${styles.mobileVisible}`,
  },
  {
    text: <ShareButton className={styles.menuItemElement} text="Поделиться" />,
    className: `${styles.menuItem} ${styles.mobileVisible}`,
  },
  {
    text: <HideButton className={styles.menuItemElement} />,
    className: styles.menuItem,
  },
  {
    text: <SaveButton className={styles.menuItemElement} text="Сохранить" />,
    className: `${styles.menuItem} ${styles.mobileVisible}`,
  },
  {
    text: <ComplainButton className={styles.menuItemElement} />,
    className: styles.menuItem,
  },
];

const list = LIST.map((item) => merge(item)({
  id: generateRandomString(),
  As: "div" as const,
  onClick: (id: string) => {
    console.log(id);
  },
}));

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        listClassName={styles.dropdown}
        closeButtonClassName={styles.menuCloseButton}
        button={
          <button className={styles.menuButton}>
            <Icons name="menuIcon" size={{}} />
          </button>
        }
      >
        <GenericList list={list} />
      </Dropdown>
    </div>
  );
}
