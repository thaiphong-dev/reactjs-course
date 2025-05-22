import React from "react";

const FooterTodo = () => {
  const mockIcon = [
    {
      icon: "../../assets/images/todo/f.svg",
      href: "#",
    },
    {
      icon: "../../assets/images/todo/in.svg",
      href: "#",
    },
    {
      icon: "../../assets/images/todo/t.svg",
      href: "#",
    },
    {
      icon: "../../assets/images/todo/g.svg",
      href: "#",
    },
  ];
  return (
    <div className="flex justify-between bg-[#F2EAEA] mt-[30px] h-[40px] p-[10px] items-center">
      <img
        className="h-[24px]"
        src="../../assets/images/todo/logo.svg"
        alt="logo"
      />

      <p className="text-[7px]  md:text-[14px]  text-gray-600">
        © 2024 Aqeel Shahzad. All Rights Reserved.
      </p>

      <div className="flex gap-2 items-center">
        <div className="flex justify-between ">
          {mockIcon.map((x, index) => (
            <a
              key={index}
              href={x.href}
              className="w-[32px] h-[32px] border border-black border-opacity-25 rounded-full flex items-center justify-center"
            >
              <img className="h-[16px]" src={x.icon} alt={`icon-${index}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterTodo;
