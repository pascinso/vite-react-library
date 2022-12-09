import type { ComponentType, Properties } from "./@types/utils";

export function defineProperties<Component extends object>(
  component: Component,
  properties: Properties<Component>
) {
  const props: { prop?: object } = properties;
  Object.defineProperties(component, props);
}

export function throwError<Component extends ComponentType>(
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
