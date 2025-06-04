import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function Layout() {
  const location = useLocation();
  const validPaths = ["/", "/about", "/work", "/contact"];
  const isValidPath = validPaths.includes(location.pathname);

  return (
    <>
      <div className="flex flex-col flex-grow">
        {isValidPath && <Header />}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        {isValidPath && <Footer />}
      </div>
    </>
  );
}

export default Layout;
