import * as React from "react";
import { Image as ImageComponent } from "../../components/Image";

export default {
  title: "Components/Image",
  component: ImageComponent,
};

export const Image = () => (
  <div style={{ width: "30rem", height: "30rem" }}>
    <ImageComponent src="https://picsum.photos/5000/5000" />
  </div>
);
