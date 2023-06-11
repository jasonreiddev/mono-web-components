import { MyComponent } from "../../../web-components/dist/web-components";

export default {
  title: "Example/Components/MyComponent",
  component: MyComponent,
};

const Template = (args) => {
  // @ts-expect-error
  return <my-component {...args}></my-component>;
};

export const Default = Template.bind({});
Default.args = {
  first: "Storybook",
  last: "Web Component",
};

export const _Min = Template.bind({});
