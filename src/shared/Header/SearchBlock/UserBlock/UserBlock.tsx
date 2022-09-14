import React from "react";
import styles from "./userblock.less";
import { Icons } from "../../../Icons/Icons";
import { Text, EColors } from "../../../Text";

interface IUserBlockProps {
  avatarSrc?: string;
  userName?: string;
  loading?: boolean;
}

export function UserBlock({ avatarSrc, userName, loading }: IUserBlockProps) {
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=${process.env.REDIRECT_URI}&duration=permanent&scope=read identity submit`}
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="user avatar"
            className={styles.avatarImage}
          />
        ) : (
          <Icons name="anonIcon" size={{}} />
        )}
      </div>
      <div className={styles.userName}>
        {loading ? (
          <Text size={20} color={userName ? EColors.black : EColors.grey66}>
            "...loading..."
          </Text>
        ) : (
          <Text size={20} color={userName ? EColors.black : EColors.grey66}>
            {userName || "Аноноим"}
          </Text>
        )}
      </div>
    </a>
  );
}
