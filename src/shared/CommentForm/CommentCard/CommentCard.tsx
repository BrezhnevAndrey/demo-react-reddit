import React, { useRef, useState } from "react";
import { UserLink } from "../../CardsList/Card/TextContent/UserLink";
import { Text } from "../../Text";
import styles from "./commentcard.less";
import { CommentsButton } from "../../CardsList/Card/Controls/CommentsButton";
import { ShareButton } from "../../CardsList/Card/Controls/ShareButton";
import { ComplainButton } from "../../CardsList/Card/Controls/ComplainButton";
import { CommentCardList } from "../CommentCardList";
// import { CommentForm } from "../CommentForm";
import { CommentFormUncontrolled } from "../../CommentFormUncontrolled";

interface ICommentCardProps {
  userName?: string;
  textContent?: string;
  data?: any;
  counter: number;
}

export function CommentCard(props: ICommentCardProps) {
  const ref = useRef("");

  const [isCommentOpened, setIsCommentOpened] = useState(false);
  const [isCommentFormOpened, setIsCommentFormOpened] = useState(false);

  function controllCommentForm() {
    isCommentFormOpened
      ? setIsCommentFormOpened(false)
      : setIsCommentFormOpened(true);
  }

  return (
    <li className={styles.commentCard}>
      {props.data && (
        <div className={styles.controllContainer}>
          <button
            type="button"
            onClick={() =>
              isCommentOpened
                ? setIsCommentOpened(false)
                : setIsCommentOpened(true)
            }
            className={styles.repliesButton}
          >
            <svg
              width="19"
              height="30"
              viewBox="0 0 19 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.5 30L19 20L8.74228e-07 20L9.5 30Z" fill="#D9D9D9" />
              <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
            </svg>
          </button>
          <div className={styles.vertical}></div>
        </div>
      )}
      <div className={styles.contentContainer}>
        <UserLink userName={props.userName} />
        <Text As={"div"} size={14}>
          {props.textContent}
        </Text>
        <div className={styles.actionContainer}>
          <CommentsButton
            className={styles.actionButton}
            author={props.userName}
            commentFormOpen={controllCommentForm}
            text={"Ответить"}
          />
          <ShareButton className={styles.actionButton} text={"Поделиться"} />
          <ComplainButton
            className={styles.actionButton}
            text={"Пожаловаться"}
          />
        </div>
        {isCommentFormOpened && (
          <CommentFormUncontrolled author={props.userName}/>
          // <CommentForm author={props.userName} isDraft={false} />
        )}
        {isCommentOpened && props.data && (
          <CommentCardList data={props.data} counter={props.counter} />
        )}
      </div>
    </li>
  );
}
