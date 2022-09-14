import React from "react";
import styles from "./textcontent.less";
import { Title } from "./Title";
import { UserLink } from "./UserLink";
import { timeAgoConvert } from '../../../utils/js/timeAgoConvert'

interface ITextContentProps {
  createdAgo?: number;
  userName?: string;
  title?: string;
  permalink?: string;
  id?: string | number;
}

export function TextContent(props: ITextContentProps) {
  
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink userName={props.userName} />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>Опубликовано </span>{" "}
          {props.createdAgo
            ? `${timeAgoConvert(props.createdAgo)} назад`
            : `неизвестно когда`}
        </span>
      </div>
      <Title titleText={props.title} permalink={props.permalink} id={props.id} />
    </div>
  );
}
