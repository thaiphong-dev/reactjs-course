import React from 'react'
import TodoMain from "../Common/Todo";
import FooterTodo from "./footerTodo";
export const Todo = () => {
  return (
    <>
      <div className='flex justify-between bg-[#F2EAEA] drop-shadow-xl h-[60px] p-3'>
        <img src="../../assets/images/todo/logo.svg"></img>
        <img src="../../assets/images/todo/avatar.png"></img>
    </div>
    <h1 className='mt-[53px] text-center font-[600] text-2xl'>
    Hello, Apeel <span className='text-gray-500'>Start planning today</span>
   </h1>
   <div className='bg-[#FAF7F2] rounded-md ml-[17px] m-[25px]'>
  
   <div className='flex justify-between p-10'>
     <div className='w-2/5'>
     <img className='w-[100px]' src="../../assets/images/todo/Sunday.png"></img>
     </div>
     <div className='w-3/5'>
      <TodoMain></TodoMain>
     </div>
   </div>
   
   
   </div>
   <FooterTodo ></FooterTodo>
    </>
  
  )
}
