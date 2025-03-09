import React, { useState } from "react";
import SideBarMenu from "./SideBarMenu";

const MainMenu = () => {
  const mockMenus = [
    {
      title: "Trang chủ",
      link: "/",
    },
    {
      title: "giới thiệu",
      link: "/about",
    },
    {
      title: "Liên hệ",
      link: "/contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="w-full bg-[#2a1d10] text-white flex justify-between items-center p-4">
        <div onClick={() => setIsOpen(true)}> menu</div>
        <div className="w-full flex justify-center items-center">
          <img
            className="w-[150px] aspect-spare "
            src="/assets/images/logo.png"
            alt="logo"
          ></img>
        </div>
        <div className="hidden lg:flex justify-between items-center space-x-[20px] ">
          {mockMenus.map((x) => (
            <div>
              <p>{x.title}</p>
            </div>
          ))}
        </div>

        <div> search</div>
      </div>
      <SideBarMenu isOpen={isOpen} handleCloseMenu={handleCloseMenu} />
    </div>
  );
};

export default MainMenu;
