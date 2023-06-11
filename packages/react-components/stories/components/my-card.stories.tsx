import { MyCard } from "../../../web-components/dist/web-components";

export default {
  title: "Example/Components/MyCard",
  component: MyCard,
};

const Template = (args) => {
  return <my-card {...args}></my-card>;
};

export const Default = Template.bind({});
Default.args = {
  heading: "Card Title",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  theme: "secondary",
};

export const _Min = Template.bind({});
