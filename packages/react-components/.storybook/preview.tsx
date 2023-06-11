import React, { useLayoutEffect } from "react";
import {
  applyPolyfills,
  defineCustomElements,
} from "../../web-components/loader";
import "../../web-components/dist/web-components/web-components.css";
import { Preview } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const preview: Preview = {
  decorators: [
    (Story) => {
      useLayoutEffect(() => {
        applyPolyfills().then(() => {
          defineCustomElements(window);
        });
      }, []);
      return <Story />;
    },
  ],
};

export default preview;
