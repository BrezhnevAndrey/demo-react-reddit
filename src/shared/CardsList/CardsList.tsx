import React, { useEffect, useRef, useState } from "react";
import styles from "./cardslist.less";
import { Card } from "./Card";
import axios from "axios";
import { useSelector } from "react-redux";
import { TRootState } from "../../store/reducer";
import { Loading } from "../Loading";

export function CardsList() {
  const token = useSelector<TRootState, string | null>((state) => state.token);
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState("");
  const [data, setData] = useState<any>([]);
  const [nextAfter, setNextAfter] = useState("");
  const [counter, setCounter] = useState(0);

  const bottomOFList = useRef<HTMLDivElement>(null);

  async function load(
    setData: React.Dispatch<any>,
    setLoading?: React.Dispatch<any>
  ) {
    if (setLoading) setLoading(true);
    try {
      const {
        data: {
          data: { children, after },
        },
      }: any = await axios.get("https://oauth.reddit.com/rising", {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          limit: 10,
          after: nextAfter,
        },
      });
      setData((prevChildren: any) => prevChildren.concat(...children));
      setNextAfter(after);
      setCounter((prevCounter) => prevCounter + 1);
    } catch (error) {
      setErrorLoading(String(error));
      console.log(error);
    }
    if (setLoading) setLoading(false);
  }

  useEffect(() => {
    if (!token) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if ((entries[0].isIntersecting && counter % 3 !== 0) || counter === 0)
          load(setData, setIsLoading);
      },
      {
        rootMargin: "100px",
      }
    );

    if (bottomOFList.current) {
      observer.observe(bottomOFList.current);
    }

    return () => {
      if (bottomOFList.current) {
        observer.unobserve(bottomOFList.current);
      }
      setErrorLoading("");
    };
  }, [counter]);

  return (
    <ul className={styles.cardsList}>
      {errorLoading && (
        <div role="alert" style={{ textAlign: "center" }}>
          {errorLoading}
        </div>
      )}

      {!isLoading && !errorLoading && data.length === 0 && (
        <div style={{ textAlign: "center" }}>Нет постов</div>
      )}

      {data.length > 0 &&
        data.map((el: any, index: number | string) => {
          return (
            <Card
              key={index}
              title={el.data.title}
              author={el.data.author}
              ups={el.data.ups}
              created={el.data.created}
              thumbnail={el.data.thumbnail}
              permalink={el.data.permalink}
              id={el.data.id}
            />
          );
        })}

      {counter % 3 === 0 && counter > 0 && !isLoading && (
        <button
          className={styles.loadButton}
          aria-label="Загрузить ещё"
          onClick={() => load(setData, setIsLoading)}
        >
          Загрузить ещё
        </button>
      )}

      <div style={{ textAlign: "center" }} ref={bottomOFList}> { isLoading && <Loading />} </div>
    </ul>
  );
}
