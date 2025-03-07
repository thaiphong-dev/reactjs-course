import React from "react";
import { Welcome } from "./welcome";
import { Signature } from "./signature";
import { MoreInfor } from "./moreInfor";

export const IntroSection = () => {
  return (
    <div>
      <Welcome />
      <Signature />
      <MoreInfor />
    </div>
  );
};
