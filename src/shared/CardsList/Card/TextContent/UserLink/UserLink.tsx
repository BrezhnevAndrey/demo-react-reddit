import React from "react";
import styles from "./userlink.less";

export function UserLink({userName}: {userName?: string}) {
  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgS9gt7bRQjO4-HPlDtfczUF7pOHNwDfqHnZgrbXm4qgyul1MgHkneswnmeMRUQNolJeM&usqp=CAU"
        alt="avatar"
      ></img>
      <a href="#user-url" className={styles.username}>
        {userName ? `${userName}` : `Автор неизвестен`}
      </a>
    </div>
  );
}
