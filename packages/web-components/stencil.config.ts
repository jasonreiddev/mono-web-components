import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "web-components",
  globalStyle: "src/global.css",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
  ],
};
