import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import Scroll from "./Scroll";
import DarkMode from "./DarkMode";

const Layout = ({children}) => {
  return (
    <div>
      <DarkMode />
      <div className="wrapper">
        {/* <!-- header section --> */}
        <Header />
  
        {children}

        <Footer />

        {/* <!-- Scroll button --> */}
        <Scroll />
      </div>
    </div>
  );
};

export default Layout;
