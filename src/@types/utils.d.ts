export type Properties<Component> = {
  [property in keyof Component]?: {
    value: Component[property];
    writable?: boolean;
  };
};

export type ComponentType = object & {
  name: string;
};
