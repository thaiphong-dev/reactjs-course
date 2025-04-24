import React, { useContext } from "react";
import { AuthContext } from "../../context/testProvider";

const Learn = () => {
  const { count, handleCount } = useContext(AuthContext); // lấy giá trị từ context

  return <div onClick={handleCount}>Learn {count}</div>;
};

export default Learn;
