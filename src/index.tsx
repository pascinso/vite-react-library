import { useLayoutEffect, useState } from "react";
import type { Counter } from "./@types";
import classNames from "./style.module.scss";
import { defineProperties, throwError } from "./utils";

const useCounter: Counter = ({ value }) => {
  const [counter, count] = useState(value || 0);
  useLayoutEffect(() => {
    defineProperties(useCounter, { count: { value: count } });
  }, []);
  return <h2 className={classNames.counter}>Counter: {counter}</h2>;
};

defineProperties(useCounter, {
  count: {
    value: useCounter.count || throwError(useCounter, "count"),
    writable: true,
  },
});

export default useCounter;
