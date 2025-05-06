import React from "react";

const MainBanner = (props) => {
  return (
    <div>
      <img alt="banner" src={props.img} height={"100%"} width={"100%"} />
    </div>
  );
};
/*
MainBanner.propTypes = {
  img: String,
};
*/
export default React.memo(MainBanner);
