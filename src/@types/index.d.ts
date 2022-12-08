import type { Dispatch, FunctionComponent, SetStateAction } from "react";

interface CounterProps {
  value?: number;
}

interface Counter extends FunctionComponent<CounterProps> {
  readonly count?: Dispatch<SetStateAction<number>>;
}
