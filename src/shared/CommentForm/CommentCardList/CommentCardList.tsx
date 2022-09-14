import React from "react";
import { CommentCard } from "../CommentCard/CommentCard";
import styles from "./commentcardlist.less";

interface ICommentCardList {
  data?: any;
}

export function CommentCardList({
  data,
  counter,
}: {
  data: Array<ICommentCardList>;
  counter: number;
}) {
  return (
    <ul className={styles.commentList} style={{ marginLeft: counter * 10 }}>
      {data.map((element, index) => {
        return (
          <CommentCard
            key={index}
            userName={element.data.author ? element.data.author : "Инкогнито"}
            textContent={
              element.data.body
                ? element.data.body
                : "Комментарий был скрыт модератором"
            }
            data={
              element.data.replies
                ? element.data.replies.data.children
                : undefined
            }
            counter={counter + 1}
          />
        );
      })}
    </ul>
  );
}
