import React, { useState } from 'react'; 
import Card from "./Card";
const Todo = () => {
 
    // Input nhap vao card
  const mockPlaceholder = [
    { 
      placeholder : "Type Title Of Task"
    },
    {
      placeholder : "Detail Of Your Task"
    }

  ]
  
  
  const [IsInputs, setInputs] = useState(["",""]);
  const [IsCards, setCards] = useState([]);
  const handleInput = (index, value) =>
     {
      const newInputs = [...IsInputs];
      newInputs[index] = value;
       setInputs(newInputs);
     }
  const handleAddCard = () =>
  {
    const [title, detail] =  IsInputs;
    if(title.trim() || detail.trim()) {
      setCards([...IsCards, {title, detail }]);
      setInputs([" "," "]);
    }
  }
  return (
    <div>
      {/*Nhập thông tin */}
      <div className="lg:flex items-center justify-center mt-10">
        {mockPlaceholder.map((x, index) => (
          <input key={index} value={IsInputs[index]} onChange={(e) => handleInput(index, e.target.value)} type="text" placeholder={x.placeholder} className="rounded-md  bg-[#DBE2EF] ml-10 h-[17px] border-[#B1B1B166] p-5 mt-5"></input>
        ))}

      {/*Nhấn nút tạo Card */}
      <div onClick={() => handleAddCard()} className="text-white  text-xl bg-[#5C9967] w-[60px] h-[25px] ml-10 flex items-center justify-center p-5 rounded-r-lg mt-5">
         +
      </div>
      </div>
       {/*Hiện cái thể card */}
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-center ">
      {IsCards.map((card, index) => (
        <Card key={index} title={card.title} detail={card.detail} />
      ))}
    </div>
      
    </div>
  )
  
}

export default Todo