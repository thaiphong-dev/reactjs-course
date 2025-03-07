// import React, { useEffect, useState } from "react";
// // import { IntroSection } from "./IntroSection";
// // import MainBanner from "../Common/MainBanner";

// const Home = (props) => {
//   // react hook
//   // + useState
//   // + useEffect

//   const [count, setCout] = useState(0);
//   const [isShowText, SetIsShowText] = useState(false);

//   useEffect(() => {
//     // logic xử lí vấn đề
//     console.log("call effect");

//     if (count === 10) {
//       SetIsShowText(true);
//     }
//     return () => {
//       // logic xử lí vấn đề
//     };
//   }, [count]); // dependencies

//   // - nothing -> luôn chạy khi component render + re-render
//   // - [] -> chỉ chạy 1 lần đầu tiên component render
//   // - [state] -> chạy khi state thay đổi

//   // const [state, setState]
//   // quản lí dữ liệu nội bộ trong 1 component
//   // state được cập nhật thông qua hàm setState
//   // mỗi lần cập nhật component sẽ bị re-render
//   // setState là một hàm bất đồng bộ để tối ưu hóa trải nghiệm người dùng
//   // * đôi khi thực tế khi có quá nhiều setState trong 1 component thì sẽ dẫn đên
//   // việc setState không trả ra kết quả trong lần render cuối
//   // bathstate

//   return (
//     <div
//       style={{
//         fontSize: 30,
//       }}
//     >
//       <div>{count}</div>
//       {isShowText && <div>chuc mung ban da dat duoc {count} diem</div>}
//       <button
//         onClick={() => {
//           setCout((prev) => prev + 1);
//         }}
//       >
//         click
//       </button>
//       {/* <MainBanner img={"/assets/images/banners/banner.jpg"} /> */}
//       {/* <IntroSection /> */}
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { IntroSection } from "./IntroSection";

const Home = () => {
  return (
    <div>
      <IntroSection />
    </div>
  );
};

export default Home;
