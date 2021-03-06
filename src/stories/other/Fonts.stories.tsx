import * as React from "react";

export default {
  title: "Other/Fonts",
};

export const Fonts = () => (
  <div style={{ fontSize: "1.5rem", fontFamily: "Primary", display: "grid", gridGap: "1.5rem" }}>
    <span>Normal</span>
    <span style={{ fontWeight: "bold" }}>Bold</span>
    <span style={{ fontStyle: "Italic" }}>Italic</span>
    <span style={{ fontWeight: 300 }}>Light</span>
    <span style={{ fontStyle: "Italic", fontWeight: "bold" }}>Italic Bold</span>
    <span style={{ fontStyle: "Italic", fontWeight: 300 }}>Light Italic</span>
  </div>
);
