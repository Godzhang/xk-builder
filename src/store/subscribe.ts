import { useEffect, useState } from "react";
import Store from ".";

export const subscribeHook = () => {
  const [update, setUpdate] = useState({});

  useEffect(() => {
    Store.subscribe(() => {
      setUpdate({ ...update });
    });
  }, []);
};
