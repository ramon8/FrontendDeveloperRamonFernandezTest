import * as React from "react";
import { Card as CardComponent } from "../../components/Card";

export default {
  title: "Components/Card",
  component: CardComponent,
};

export const Card = () => (
  <>
    <CardComponent image="https://picsum.photos/1000/1000" title="Card title" subtitle="Card footnote" />
  </>
);
