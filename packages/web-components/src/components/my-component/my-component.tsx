import { Component, Prop, h } from "@stencil/core";
import { formatName } from "helpers/text";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true,
})
export class MyComponent {
  @Prop() first?: string;
  @Prop() middle?: string;
  @Prop() last?: string;

  private getText(): string {
    return formatName(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World!!! I'm {this.getText()}</div>;
  }
}