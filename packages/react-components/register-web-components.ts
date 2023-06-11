import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Components } from "web-components";

type ToReact<T> = DetailedHTMLProps<HTMLAttributes<T>, T>;

declare global {
  export namespace JSX {
    interface IntrinsicElements {
      "my-card": Components.MyCard & ToReact<HTMLMyCardElement>;
    }
    interface IntrinsicElements {
      "my-component": Components.MyComponent & ToReact<HTMLMyComponentElement>;
    }
  }
}
