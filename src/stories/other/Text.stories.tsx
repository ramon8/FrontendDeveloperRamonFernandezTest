import * as React from "react";
import { Header } from "../../components/Header/Header";

export default {
  title: "Other/Texts",
  component: Header,
};

export const Texts = () => (
  <div style={{ display: "grid", gridGap: "1.5rem" }}>
    <h1>Title text</h1>
    <p>Normal text</p>
    <p className="small">Small text</p>
    <a>Link</a>
  </div>
);
