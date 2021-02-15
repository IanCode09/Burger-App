import React from "react";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = ({ children }) => {
  return (
    <>
      <Toolbar />
      <main className='Content'>{children}</main>
    </>
  );
};

export default Layout;
