import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useLayoutEffect,
  useState,
} from "react";
import classNames from "./counter.module.scss";

export interface CounterProps {
  value?: number;
}

export interface Counter extends FunctionComponent<CounterProps> {
  readonly count?: Dispatch<SetStateAction<number>>;
}

type Properties<Component> = {
  [property in keyof Component]: {
    value: Component[property];
    writable?: boolean;
  };
};
type ComponentType = object & {
  name: string;
};

function defineProperties<Component extends object>(
  component: Component,
  properties: Properties<Component>
) {
  Object.defineProperties(component, properties);
}
function throwError<Component extends ComponentType>(
  component: Component,
  property: keyof Component
) {
  return function error() {
    throw new Error(
      `${component.name.substring(
        3
      )} should be rendered to access ${property.toString()} property`
    );
  };
}

export const useCounter: Counter = ({ value }) => {
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
