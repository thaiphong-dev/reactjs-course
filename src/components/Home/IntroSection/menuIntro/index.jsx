import React from "react";
import MenuIntroItem from "./MenuIntroItem";

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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {listMenu.map((menu) => (
        <MenuIntroItem {...menu} />
      ))}
    </div>
  );
};

export default MenuIntro;
