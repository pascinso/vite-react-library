export type Properties<Component extends object> = {
  [property in keyof Component]?: {
    value: Component[property];
    writable?: boolean;
  };
};

export type ComponentType = object & {
  name: string;
};
