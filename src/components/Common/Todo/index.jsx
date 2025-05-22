import React, { useState, useEffect } from "react";
import Card from "./Card";

const TodoMain = () => {
  const mockCategory = [
    {
      value: "0",
      label: "",
    },
    {
      value: "1",
      label: "Học tập",
    },
    {
      value: "2",
      label: "Công việc",
    },
    {
      value: "3",
      label: "Tập thể dục",
    },
    {
      value: "4",
      label: "Thiền",
    },
  ];

  const mockPriority = [
    {
      value: "0",
      label: "",
    },
    {
      value: "1",
      label: "Normal",
    },
    {
      value: "2",
      label: "Hot",
    },
    {
      value: "3",
      label: "Urgent",
    },
  ];
  /* const mockBy = [{ name: "By category" }, { name: "By priority" }]; */

  const [inputs, setInputs] = useState({
    title: "",
    detail: "",
    category: "0",
    priority: "0",
  });
  const [selected, setSelected] = useState({
    selectedCategory: "0",
    selectedPriority: "0",
  });
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState(4);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleInput = (key, value) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddCard = () => {
    const { title, detail, category, priority } = inputs;

    if (
      title.trim() !== "" ||
      detail.trim() !== "" ||
      category.trim() !== "" ||
      priority.trim() !== ""
    ) {
      setCards((card) => [
        {
          title,
          detail,
          category,
          priority,
          mockCategory,
          mockPriority,
          isChecked: false,
        },
        ...card,
      ]);
      setInputs({ title: "", detail: "", category: "", priority: "" });
    }
  };

  const handleRemoveCard = (index) => {
    setCards((prev) => prev.filter((_, i) => i !== index));
  };

  const handleNoteCard = () => {};

  const handleCheckCard = (index) => {
    setCards((prev) =>
      prev.map((card, i) =>
        i === index ? { ...card, isChecked: !card.isChecked } : card
      )
    );
  };

  const handleSearch = () => {
    const keyword = searchKeyword.toLowerCase().trim();
    let result = cards;

    if (selected.selectedCategory !== "0") {
      result = result.filter(
        (card) => card.category === selected.selectedCategory
      );
    }

    if (selected.selectedPriority !== "0") {
      result = result.filter(
        (card) => card.priority === selected.selectedPriority
      );
    }

    if (keyword !== "") {
      result = result.filter((card) => {
        return card.title && card.title.toLowerCase().includes(keyword);
      });
    }

    setFilteredCards(result);
    setVisibleCards(4);
  };

  const handleFitter = () => {
    let result = cards;

    if (selected.selectedCategory !== "0") {
      result = result.filter(
        (card) => card.category === selected.selectedCategory
      );
    }

    if (selected.selectedPriority !== "0") {
      result = result.filter(
        (card) => card.priority === selected.selectedPriority
      );
    }

    setFilteredCards(result);
    setVisibleCards(4);
  };

  const handleLoadMore = () => {
    setVisibleCards((prev) => Math.min(prev + 4, filteredCards.length));
  };

  const handleLessShow = () => {
    setVisibleCards(4);
  };

  useEffect(() => {
    setFilteredCards(cards);
    setVisibleCards(4); // Reset khi có card mới
  }, [cards]);

  useEffect(() => {
    handleFitter();
  }, [cards, selected.selectedCategory, selected.selectedPriority]);
  return (
    <div className="w-[100%]">
      {/* Input nhập thẻ */}
      <div className="flex flex-col w-[100%] lg:flex-row  lg:w-[100%]items-center justify-between gap-[20px]">
        <input
          onChange={(e) => handleInput("title", e.target.value)}
          type="text"
          value={inputs.title}
          placeholder="Type Title Of Task"
          className="w-[100%] lg:w-[50%] rounded-lg bg-[#DBE2EF] h-[17px] border-[#B1B1B166] p-5 mt-5 "
        />

        <input
          onChange={(e) => handleInput("detail", e.target.value)}
          type="text"
          value={inputs.detail}
          placeholder="Detail Of Your Task"
          className="w-[100%] lg:w-[50%] rounded-lg bg-[#DBE2EF] h-[17px] border-[#B1B1B166] p-5 mt-5 "
        />

        <div
          onClick={handleAddCard}
          className="w-full mt-5 lg:w-[11%] h-[40px] bg-[#5C9967] text-white text-xl flex items-center justify-center rounded-r-lg  cursor-pointer"
        >
          +
        </div>
      </div>
      {/*SELECT ĐỂ TẠO*/}
      <div className="flex flex-col w-[100%] lg:w-[88%] lg:flex-row items-center justify-between ">
        <select
          className="w-[100%] lg:w-[48%] bg-[#DBE2EF] rounded-lg h-[40px] p-2 mt-5"
          value={inputs.category}
          onChange={(e) => handleInput("category", e.target.value)}
        >
          {mockCategory.map((e) => (
            <option key={e.value} value={e.value}>
              {e.label}
            </option>
          ))}
        </select>

        <select
          className="w-[100%] lg:w-[48%] bg-[#DBE2EF] rounded-lg h-[40px] p-2 mt-5"
          value={inputs.priority}
          onChange={(e) => handleInput("priority", e.target.value)}
        >
          {mockPriority.map((e) => (
            <option key={e.value} value={e.value}>
              {e.label}
            </option>
          ))}
        </select>
      </div>

      {/* Filter và Search */}
      <div className="flex flex-col w-[100%] lg:w-[88%] lg:flex-row items-center justify-between ">
        {/* Select ĐỂ TÌM KIẾM */}
        <select
          className="w-[100%] lg:w-[48%] bg-[#F0D1A8] rounded-lg  h-[40px] p-2 mt-5"
          value={selected.selectedCategory}
          onChange={(e) => {
            setSelected((prev) => ({
              ...prev,
              selectedCategory: e.target.value,
            }));
          }}
        >
          {mockCategory.map((e) => (
            <option key={e.value} value={e.value}>
              {e.label}
            </option>
          ))}
        </select>
        <select
          className="w-[100%] lg:w-[48%] bg-[#F0D1A8] rounded-lg  h-[40px] p-2 mt-5"
          value={selected.selectedPriority}
          onChange={(e) => {
            setSelected((prev) => ({
              ...prev,
              selectedPriority: e.target.value,
            }));
          }}
        >
          {mockPriority.map((e) => (
            <option key={e.value} value={e.value}>
              {e.label}
            </option>
          ))}
        </select>
      </div>
      {/* <!---Search --> */}
      <div className="w-[100%] lg:flex justify-end lg:w-[88%]">
        <div className="flex justify-between lg:w-[48%]  mt-5 h-10 rounded-lg border border-[#F0D1A8] ">
          <input
            className="pl-[5px] w-[90%]"
            type="search"
            placeholder="Search by name"
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <img
            className="w-[30px] pr-[5px] cursor-pointer"
            src="/assets/images/todo/search.svg"
            alt=""
            onClick={handleSearch}
          />
        </div>
      </div>

      {/* Hiện card */}
      <div className="flex flex-clo lg:w-[88%] grid grid-cols-2 gap-[20px] mt-[20px]">
        {filteredCards.slice(0, visibleCards).map((card, index) => (
          <Card
            key={index}
            {...card}
            onTick={() => handleCheckCard(index)}
            onNote={() => handleNoteCard(index)}
            onRemove={() => handleRemoveCard(index)}
          />
        ))}
      </div>

      {/* Nút Load More & Less More */}
      <div className="flex justify-center gap-5 mt-5">
        {/* Hiện nút Load More nếu còn phần tử chưa hiển thị */}
        {visibleCards < filteredCards.length && (
          <button
            onClick={handleLoadMore}
            className="text-pink-500 px-4 py-2 border border-[#F0D1A8]"
          >
            Load More
          </button>
        )}

        {/* Hiện nút Less More khi đã load hết và đang xem nhiều hơn 4 */}
        {visibleCards >= filteredCards.length && visibleCards > 4 && (
          <button
            onClick={handleLessShow}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Less More
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoMain;
