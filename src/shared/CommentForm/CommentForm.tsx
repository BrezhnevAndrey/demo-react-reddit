import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./commentform.less";
import { useDispatch, useSelector } from 'react-redux';
import { updateComment, TRootState } from '../../store/reducer';

interface ICommentFormProps {
  author?: string;
  isDraft?: boolean;
}

export function CommentForm(props: ICommentFormProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  const dispatch = useDispatch();
  const value = useSelector<TRootState, string>(state => state.commentText)

  const [valueWithoutDarft, setValueWithoutDarft] = useState(
    `${props.author}, `
  );

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    props.isDraft
      ? dispatch(updateComment(event.target.value))
      : setValueWithoutDarft(event.target.value);
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      ref.current.selectionStart = ref.current.value.length;
    }
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={props.isDraft ? value : valueWithoutDarft}
        onChange={handleChange}
        ref={ref}
      />
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}
