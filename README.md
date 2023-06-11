# mono-web-components

## Packages

- **helpers**: Typescript helpers
- **web-components**: Stencil web components library
- **react-components**: Wrappers and storybook for components
- **web-app**: Next.js app

## Usage

- `yarn build`: Builds Stencil components w/ watch for hot reload
- `yarn sb`: Starts Storybook
- `yarn dev`: Starts Next.js app

## Notes

`cl:start` removes folders required to run storybook or app within packages\web-components\dist, including "esm", so will require rebuild
