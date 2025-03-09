import React from "react";
import MenuIntroItem from "./MenuIntroItem";
import "./index.css";
const MenuIntro = () => {
  const listMenu = [
    {
      img: "/assets/images/intro/img.jpg",
      title: "Một góc nhỏ bình yên",
      content:
        "Bước qua cánh cửa của Chuồn Chuồn Kim, bạn như chạm vào một miền ký ức dịu dàng. Ở đây, mỗi chiếc bàn gỗ, từng món đồ gốm, chiếc đèn treo đều mang hơi thở của một thời xưa cũ – nơi những bữa cơm nhà luôn ấm áp, đầy đủ hương vị và yêu thương.",
      href: "/#",
    },
    {
      title: "Một góc nhỏ bình yên",
      img: "/assets/images/intro/img1.jpg",
      content:
        "Bước qua cánh cửa của Chuồn Chuồn Kim, bạn như chạm vào một miền ký ức dịu dàng. Ở đây, mỗi chiếc bàn gỗ, từng món đồ gốm, chiếc đèn treo đều mang hơi thở của một thời xưa cũ – nơi những bữa cơm nhà luôn ấm áp, đầy đủ hương vị và yêu thương.",
      href: "/#",
    },
    {
      img: "/assets/images/intro/img2.jpg",
      title: "Một góc nhỏ bình yên",
      content:
        "Bước qua cánh cửa của Chuồn Chuồn Kim, bạn như chạm vào một miền ký ức dịu dàng. Ở đây, mỗi chiếc bàn gỗ, từng món đồ gốm, chiếc đèn treo đều mang hơi thở của một thời xưa cũ – nơi những bữa cơm nhà luôn ấm áp, đầy đủ hương vị và yêu thương.",
      href: "/#",
    },
  ];
  return (
    <div>
      <div
        // style={{
        //   display: "grid",
        //   gridTemplateColumns: "3",
        // }}
        className="text-[20px] text-red-500 font-bold grid grid-cols-2 text-center  md:grid-cols-3 lg:grid-cols-4"
      >
        <div className="border border-black">1</div>
        <div className="border border-black">2</div>
        <div className="border border-black">3</div>
        <div className="border border-black">4</div>
        <div className="border border-black">1</div>
        <div className="border border-black">2</div>
        <div className="border border-black">3</div>
        <div className="border border-black">4</div>
      </div>
    </div>
  );
};

export default MenuIntro;
