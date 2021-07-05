import * as React from "react";
import { Header as HeaderComponent } from "../../components/Header/Header";

export default {
  title: "Components/Header",
  component: HeaderComponent,
};

export const Header = () => (
  <>
    <HeaderComponent onTogglerChange={() => {}} title="Header title" />
  </>
);
