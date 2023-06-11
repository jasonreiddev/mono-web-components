import { motion } from "framer-motion";
import { Components } from "web-components/dist/types";

export interface MyWidgetProps {
  cardProps: Components.MyCard;
  componentsProps: Components.MyComponent[];
  animate?: boolean;
}

const wrapper = {
  visible: { opacity: 1, scale: 1, y: 0 },
  hidden: { opacity: 0, scale: 0.8, y: "var(--spacing-xl)" },
};

export const MyWidget = ({
  cardProps,
  componentsProps,
  animate = true,
}: MyWidgetProps) => (
  <motion.div
    initial={animate ? "hidden" : "visible"}
    animate="visible"
    variants={wrapper}
  >
    <my-card {...cardProps}>
      {componentsProps &&
        componentsProps.map((componentProps) => (
          <my-component slot="child" {...componentProps}></my-component>
        ))}
    </my-card>
  </motion.div>
);
