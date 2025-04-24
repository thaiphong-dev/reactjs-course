// state managerment   // quản lý state
//   useState => quản lý 1 state nội bộ trong 1 component view - update => BẤT ĐỒNG BỘ react => setState
//   useReducer => quản lý 1 state với nhiều actions phức tạp  // local state => dispath                    => rerender component
// const initState = {
//   name: "Nguyen Van A",
//   age: 20,
//   address: {
//     street: "123 Main St",
//     city: "Hanoi",
//   },
// };
// const reducer = (state, action) => {
//   // máy nhận vào chỉ thị và làm việc dựa theo chỉ thị đó
//   switch (action.type) {
//     case "updateName":
//       return { ...state, name: action.payload };
//     case "updateAge":
//       return { ...state, age: action.payload };
//     case "updateAddress":
//       return { ...state, address: { ...state.address, ...action.payload } };
//     default:
//       return state;
//   }
// };
// const [person, dispath] = useReducer(reducer, initState);

// let state = initState
// const dispath = ({ type: string, payload: string }) => {
//   state = reducer(initState, { type: "updateName", payload: "Nguyen Van B" }); //gọi
// };

// return
//   state as  person

// dispath({ type: "updateName", payload: "Nguyen Van B" }); //gọi

// initState => giá trị khởi tạo
// reducer => hàm định nghĩa action dựa theo action type
// dispath => hàm gọi action để cập nhật state
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
//   useContext => nơi quản lý các state dùng chung (global state) cho các component cùng cấp => state teen menu  chỉ dùng cho state ít thay đổi theme, userprofile, auth, language
// * ít thay đổi + dùng nhiều nơi
// import { createContext, useState } from "react";
// export const AuthContext = createContext(); // tạo ra 1 context mới
// export const AuthProvider = ({ children }) => {
//   // call api login success => call api get user dựa trên token => set user vào context
//   const [count, setCount] = useState(0); // state count, setCount là hàm để cập nhật lại giá trị của count
//   const handleCount = () => {
//     setCount(count + 1); // cập nhật lại giá trị của count
//   };
//   return (
//     <AuthContext.Provider value={{ count, handleCount }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

//   useRef // cập nhật lại giá trị nhưng không làm render lại conponent
//   useMemo => hook lưu kết quả là 1 biến tính toán phức tạp, sẽ không tính toán lại nếu không có sự thay đổi của biến đầu vào
//   React.memo => giúp component không render lại nếu props không thay đổi
//   useCallback => hook lưu lại 1 hàm, sẽ không tạo ra hàm mới nếu không có sự thay đổi của biến đầu vào
// life circle component

// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

// chưa học
// nhiều thay đổi + dùng nhiều nơi => redux, zustand
// initState : store => giá trị khởi tạo
// reducer => hàm định nghĩa action dựa theo action type
// dispath => hàm gọi action để cập nhật state
//   call api

import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { AuthContext } from "../../context/testProvider";

const Home = () => {
  const { count, handleCount } = useContext(AuthContext); // lấy giá trị từ context

  const nameRef = useRef();

  const initState = {
    name: "Nguyen Van A",
    age: 20,
    address: {
      street: "123 Main St",
      city: "Hanoi",
    },
  };

  const reducer = (state, action) => {
    // máy nhận vào chỉ thị và làm việc dựa theo chỉ thị đó
    switch (action.type) {
      case "updateName":
        nameRef.current = action.payload;
        return { ...state, name: action.payload };
      case "updateAge":
        return { ...state, age: action.payload };
      case "updateAddress":
        return { ...state, address: { ...state.address, ...action.payload } };

      default:
        return state;
    }
  };

  // initState => giá trị khởi tạo
  // reducer => hàm định nghĩa action dựa theo action type
  // dispath => hàm gọi action để cập nhật state

  const arr = [
    // props, response từ api  => arr động
    {
      id: 1,
      name: "Nguyen Van A",
      age: 20,
    },
    {
      id: 2,
      name: "Nguyen Van Bbbb",
      age: 25,
    },
    {
      id: 3,
      name: "Nguyen Van C",
      age: 30,
    },
    {
      id: 4,
      name: "Nguyen Van B",
      age: 26,
    },
    {
      id: 5,
      name: "Nguyen Van C",
      age: 30,
    },
  ];
  const [num, setNum] = useState(0);
  const [na, setNa] = useState(0);
  const age25 = useMemo(() => {
    return arr.find((item) => item.age === 25);
  }, [num, na]); // dependency array - mảng phụ thuộc

  const handleFilter = useCallback(() => {
    console.log("====================================");
    console.log("handleClick");
    console.log("====================================");
  }, [num, na]);

  const handleClick = () => {
    console.log("====================================");
    console.log("handleClick");
    console.log("====================================");
  };

  return (
    <div className="space-x-4">
      <div>home</div>
      <div onClick={handleCount}>{count}</div>
      {/* <input type="text" ref={nameRef} required />
      <div>
        <h1 className="text-2xl font-bold">
          Name: {nameRef.current || person.name}
        </h1>
        <h1 className="text-2xl font-bold">Age: {person.age}</h1>
        <h1 className="text-2xl font-bold">
          Address: {person.address.street}, {person.address.city}
        </h1>
        <div className="space-x-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() =>
              dispath({ type: "updateName", payload: "Nguyen Van B" })
            }
          >
            update name
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => dispath({ type: "updateAge", payload: 25 })}
          >
            update age
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => handleFilter()}
          >
            update address
          </button>
        </div>
        <MainBanner handleFilter={handleFilter} age25={age25} img="/acv.png" />
      </div> */}
    </div>
  );
};

export default Home;
