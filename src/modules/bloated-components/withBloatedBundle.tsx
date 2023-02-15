import type { ComponentType } from "react";
import { Globe } from ".";

export function withBloatedBundle<P extends JSX.IntrinsicAttributes = {}>(Component: ComponentType<P>) {
  return function componentWithBloatedBundle(props: P) {
    console.log(Globe)
    return <Component {...(props as P)} />;
  };
}
