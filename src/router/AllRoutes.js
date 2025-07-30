import React from "react";
import Preview from "../views/Preview";
import HomeDark from "../views/all-home-version/HomeDark";
import HomeRtl from "../views/all-home-version/HomeRtl";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ContextProvider from "../Context/ContextProvider";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import Portfolio from "../components/portfolio/Portfolio";

const AllRoutes = () => {
  return (
    <>
      <ContextProvider>
        <ScrollTopBehaviour />
        <Routes>
          <Route path="/preview" element={<Preview />} />
          <Route path="/" element={<HomeDark />} />
          <Route path="/home-rtl" element={<HomeRtl />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContextProvider>
    </>
  );
};

export default AllRoutes;
