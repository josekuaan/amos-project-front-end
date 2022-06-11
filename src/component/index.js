import Header from "./Header";
import SubHeader from "./SubHeader";
import NewArrival from "./NewArrival";
import Featured from "./Featured";
import Space from "./Space";
import Blog from "./Blog";
import FirstFooter from "./FirstFooter";
import Footer from "./Footer";

import React from "react";

export default function Index() {
  return (
    <>
      <Header />
      <SubHeader />
      <NewArrival />
      <Space />
      <Featured />
      <Blog />
      <FirstFooter />
      <Footer />
    </>
  );
}
