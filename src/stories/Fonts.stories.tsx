import * as React from "react";

export default {
  title: "Fonts",
};

export const Fonts = () => (
  <div style={{ fontSize: "1.5rem", fontFamily: "Primary", display: "grid" }}>
    <span>Primary Normal</span>
    <span style={{ fontWeight: "bold" }}>Bold</span>
    <span style={{ fontStyle: "Italic" }}>Italic</span>
    <span style={{ fontStyle: "Italic", fontWeight: "bold" }}>Italic Bold</span>
  </div>
);
