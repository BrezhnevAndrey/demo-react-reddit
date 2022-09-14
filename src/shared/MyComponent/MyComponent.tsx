import React, { useState } from "react";
import styles from "./mycomponent.less";

interface IMyInterface {
  name: string;
}

export function MyComponent(props: IMyInterface) {
  const [count, setCount] = useState(0);

  return (
    <div
      className={styles.mycomponent}
      onClick={() => {
        if (count < 10) {
          setCount(count + 1);
        } 
        else setCount(0);
      }}
    >
      <p>{props.name}</p>
      <p>{count}</p>
    </div>
  );
}
