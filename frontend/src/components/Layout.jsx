// Layout.js

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>

    </div>
  );
};

export default Layout;
