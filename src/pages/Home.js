import Header from "../component/Header";
import SubHeader from "../component/SubHeader";
import NewArrival from "../component/NewArrival";
import Featured from "../component/Featured";
import Space from "../component/Space";
import Blog from "../component/Blog";
import FirstFooter from "../component/FirstFooter";
import Footer from "../component/Footer";

import React from "react";

export default function Home() {
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
