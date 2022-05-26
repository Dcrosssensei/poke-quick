import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};
