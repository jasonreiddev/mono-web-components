import { useLayoutEffect } from "react";
import {
  applyPolyfills,
  defineCustomElements,
} from "../../web-components/loader";
import "../../web-components/dist/web-components/web-components.css";

export default function App({ Component, pageProps }) {
  useLayoutEffect(() => {
    applyPolyfills().then(() => {
      defineCustomElements(window);
    });
  }, []);
  return <Component {...pageProps} />;
}
