import React from 'react';

const Card = ({ title, detail}) => {
  const today = new Date();
  const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  const mockIcon = [
    {
        link : "/assets/images/card/clock.png"
       
    },
    {
      link: "/assets/images/card/note.png"
    },
    {
      link: "/assets/images/card/bin.png"
    }
  ]
  return (
    <div className="bg-[#F0D1A8] rounded-md  w-[210px] ml-[250px] flex justify-around mt-5 items-center">
      <div>
        <p className="font-semibold text-xl p-1">{title}</p>
        <p className='text-[#5C5C57E5] text-sm p-1'>{detail}</p>
        <p className='text-[#4B332F] text-sm p-1'>Start date: {formattedDate} </p>
      </div>

     <div className="mt-2 flex flex-col items-center gap-3 pl-4">
      {mockIcon.map((e, index) => (
        <img key={index} className="cursor-pointer w-5 h-5" src={e.link} alt={`icon-${index}`} />
      ))}
    </div>

    </div>
  );
};

export default Card;
