import { MyWidget } from "../../react-components/stories/widgets/MyWidget/MyWidget";

export default function Index() {
  return (
    <>
      <MyWidget
        cardProps={{ heading: "Hello" }}
        componentsProps={[
          { first: "Web App", last: "React Component" },
          { first: "Jason", last: "Reid" },
        ]}
      ></MyWidget>
      <MyWidget
        cardProps={{ heading: "World", theme: "secondary" }}
        componentsProps={[
          { first: "Jason", last: "Reid" },
          { first: "Jason", last: "Reid" },
        ]}
      ></MyWidget>
    </>
  );
}
