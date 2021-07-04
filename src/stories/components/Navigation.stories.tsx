import * as React from "react";
import { Navigation as NavigationComponent } from "../../components/Navigation";

const navItems: string[] = ["all", "ps4", "x1", "pc", "switch"];

export default {
  title: "Components/Navigation",
  component: NavigationComponent,
};

export const Navigation = () => (
  <>
    <NavigationComponent items={navItems} />
  </>
);
