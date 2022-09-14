import React, { useState } from "react";
import styles from "./karmacounter.less";

interface IKarmaCounterProps {
  karmaCounter?: number;
}

export function KarmaCounter(props: IKarmaCounterProps) {

  const [count, setCount] = useState(props.karmaCounter || 100);

  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up} onClick={() => {
        setCount(count + 1);
      }}>
        <svg
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
        </svg>
      </button>

      <span className={styles.karmaValue}>{count}</span>

      <button className={styles.down} onClick={() => {
        setCount(count - 1);
      }}>
        <svg
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
        </svg>
      </button>
    </div>
  );
}
