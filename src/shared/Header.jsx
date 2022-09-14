import * as React from "react";
import { hot } from "react-hot-loader/root";
import styles from "./header.less";

import { SearchBlock } from "./Header/SearchBlock";
import { ThreadTitle } from "./Header/ThreadTitle";
import { SortBlock } from "./Header/SortBlock";
import { UserBlock } from "./Header/SearchBlock/UserBlock";

function HeaderComponent() {
  console.log(styles, styles.example);
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
      <UserBlock />
    </header>
  );
}

export const Header = hot(HeaderComponent);
