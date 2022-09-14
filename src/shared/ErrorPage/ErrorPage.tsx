import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TRootState } from "../../store/reducer";
import styles from "./errorpage.less";

export function ErrorPage() {
  const [error, setError] = useState<Error | string>(
    Error("Ошибка 404. Страница не найдена")
  );

  const commentsError = useSelector<TRootState, Error | string>(
    (state) => state.comments.error
  );
  const meError = useSelector<TRootState, Error | string>(
    (state) => state.me.error
  );

  useEffect(() => {
    if (commentsError) setError(commentsError);
    else if (meError) setError(meError);
  }, [error]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{String(error)}</h1>
    </div>
  );
}
