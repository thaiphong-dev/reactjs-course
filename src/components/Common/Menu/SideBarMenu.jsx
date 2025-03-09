import React from "react";

const SideBarMenu = (props) => {
  const { isOpen, handleCloseMenu } = props;
  return (
    <div>
      <div
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(-100%) ",
          transition: "all 0.3s ease",
        }}
        className="bg-blue-300 fixed inset-0 z-[100] w-[260px] "
      ></div>
      <div
        style={{
          display: isOpen ? "block" : "none",
        }}
        onClick={handleCloseMenu}
        className="bg-black/30 fixed inset-0 "
      ></div>
    </div>
  );
};

export default SideBarMenu;
