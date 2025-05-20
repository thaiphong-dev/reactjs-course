import React from 'react';


const Card = ({ title, detail,category, priority, isChecked, onTick, onRemove}) => {
  const today = new Date();
  const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  const mockIcon = [
    {
        link : "/assets/images/card/clock.png",
        onclick: onTick
       
    },
    {
      link: "/assets/images/card/bin.png",
      onclick: onRemove
    }
  ]
 


  return (
    <div className="bg-[#F0D1A8] rounded-md  w-[210px] flex justify-between p-5 mt-[20px] w-full"
     style={{
      backgroundColor: isChecked ? '#5C9967' : '#F0D1A8',
      color: isChecked ? 'white' : 'black',
    }}
    >
      <div>
        <p className="font-semibold text-xl p-1">{title}</p>
        <p  style={{
           color: isChecked ? 'white' : 'black',
        }} className='text-[#4B332F] text-sm p-1'>{detail}</p>
        <p style={{
    
    color: isChecked ? 'white' : 'black',
  }} className='text-[#4B332F] text-sm p-1'>{category}</p>
        <p  style={{
    
      color: isChecked ? 'white' : 'black',
    }} className='text-[#4B332F] text-sm p-1'>Start date: {formattedDate} </p>
      </div>

     <div className="mt-2 flex flex-col items-center pl-4">
     <p style={{
    
    color: isChecked ? 'white' : 'black',
  }} className='text-[#4B332F] text-sm p-1'>{priority}</p>
      {mockIcon.map((e, index) => (
        <img key={index} className="mb-2 cursor-pointer w-5 h-5" onClick={e.onclick} src={e.link} alt={`icon-${index}`} />
      ))}
    </div>

    </div>
  );
};

export default Card;
