import React from "react";
import { IntroSection } from "./IntroSection";
import MainBanner from "../Common/MainBanner";

const Menu = (props) => {
  return (
    <div>
      <MainBanner img={"/assets/images/banners/banner1.jpg"} />
      <IntroSection />
    </div>
  );
};

export default Menu;
