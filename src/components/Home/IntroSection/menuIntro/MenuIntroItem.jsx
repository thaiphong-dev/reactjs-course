import React from "react";

const MenuIntroItem = (props) => {
  const { img, title, content, href } = props;
  return (
    <div style={{ width: 300, textAlign: "center" }}>
      <img style={{ width: 300 }} src={img} alt="intro" />
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <a href={href}>xem them</a>
      </div>
    </div>
  );
};

export default MenuIntroItem;
