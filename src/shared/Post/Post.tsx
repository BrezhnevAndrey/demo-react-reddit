import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { commentsRequestSuccess } from "../../store/comments/comments";
import { commentsRequestAsync } from "../../store/comments/reducer";
import { setUserId, TRootState } from "../../store/reducer";
import { CommentCardList } from "../CommentForm/CommentCardList";
import { CommentFormByFormik } from "../CommentFormByFormik";
import styles from "./post.less";

export function Post() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const { id } = useParams();
  const token = useSelector<TRootState, string | null>((state) => state.token);
  dispatch(setUserId(id));
  const { commentData, postData } = useSelector<TRootState, any>(
    (state) => state.comments.data
  );
  const commentsError = useSelector<TRootState, Error | string>(state => state.comments.error)

  useEffect(() => {
    dispatch(commentsRequestAsync());
    if (commentsError) {
      navigate('/error');
      return;
    }
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        navigate("/posts");
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      dispatch(commentsRequestSuccess({}));
      document.removeEventListener("click", handleClick);
    };
  }, [token, commentsError]);

  const node = document.querySelector("#modal_root");
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      {commentData && postData && (
        <div className={styles.post} ref={ref}>
          <h2 className={styles.title}>{postData.title}</h2>
          <div className={styles.content}>
            {postData.title}
            {postData.title}
            {postData.title}
            {postData.title}
            {postData.title}
          </div>
          <CommentFormByFormik />
          <CommentCardList data={commentData} counter={0} />
        </div>
      )}
    </div>,
    node
  );
}
