import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "my-card",
  styleUrl: "my-card.css",
  shadow: true,
})
export class MyComponent {
  @Prop() heading?: string;
  @Prop() theme?: "primary" | "secondary";

  render() {
    return (
      <div data-theme={this.theme}>
        <h2>{this.heading}</h2>
        <slot name="child" />
      </div>
    );
  }
}
