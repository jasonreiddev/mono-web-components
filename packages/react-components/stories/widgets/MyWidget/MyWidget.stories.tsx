import { MyWidget } from "./MyWidget";

export default {
  title: "Example/Widgets/MyWidget",
  component: MyWidget,
};

const Template = (args) => {
  return <MyWidget {...args}></MyWidget>;
};

export const Default = Template.bind({});
Default.args = {
  cardProps: {
    heading: "Heading",
  },
  componentsProps: [
    { first: "Storybook", middle: "React Component" },
    { first: "Jason", last: "Reid" },
  ],
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  cardProps: {
    ...Default.args.cardProps,
    theme: "secondary",
  },
};

export const NoAnimation = Template.bind({});
NoAnimation.args = {
  ...Default.args,
  animate: false,
};

export const _Min = Template.bind({});
