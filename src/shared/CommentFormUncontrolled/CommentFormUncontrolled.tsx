import React, { FormEvent, useEffect, useRef } from "react";
import styles from "./commentformuncontrolled.less";

interface ICommentFormUncontrolledProps {
  author?: string;
}

export function CommentFormUncontrolled(props: ICommentFormUncontrolledProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() =>{
    if (ref.current) {
      ref.current.focus();
      ref.current.selectionStart = ref.current.value.length;
    }
  })

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} defaultValue={`${props.author}, `} ref={ref}></textarea>
      <button type="submit" className={styles.button} >Комментировать</button>
    </form>
  );
}
