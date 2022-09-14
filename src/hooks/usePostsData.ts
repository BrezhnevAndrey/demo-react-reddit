import axios from "axios";
import { useEffect, useState } from "react";

interface IElem {
  [index: string]: any;
}

export function usePostsData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("https://oauth.reddit.com/best.json", {
        headers: { Authorization: `Bearer` },
        params: { limit: 10, after: "afterLoad" },
      })
      .then((resp) => {
        const postsData = resp.data.data.children.map((elem: IElem) => {
          return {
            author: elem.data.author,
            title: elem.data.title,
            ups: elem.data.ups,
            created: elem.data.created,
            thumbnail: elem.data.thumbnail,
            permalink: elem.data.permalink,
          };
        });
        setData(postsData);
      });
  }, []);
  return [data];
}
