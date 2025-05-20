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
  const [chooses, setChoose] = useState({
    chooseCategory: "",
    choosePriority: "",
  });
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState(4);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleInput = (key, value) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };
  const handleChoose = (key, value) => {
    setChoose((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddCard = () => {
    const { title, detail, category, priority } = inputs;

    // Tìm label tương ứng từ value
    const categoryLabel =
      mockCategory.find((cat) => cat.value === inputs.category)?.label || " ";
    const priorityLabel =
      mockPriority.find((pr) => pr.value === inputs.priority)?.label || "";

    if (
      title.trim() !== "" ||
      detail.trim() !== "" ||
      category.trim() !== "" ||
      priority.trim() !== ""
    ) {
      setCards((prev) => [
        { title, detail, categoryLabel, priorityLabel, isChecked: false },
        ...prev,
      ]);
      setInputs({ title: "", detail: "", category: "0", priority: "0" });
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
    const categoryLabel =
      mockCategory.find((cat) => cat.value === chooses.chooseCategory)?.label ||
      "";

    const priorityLabel =
      mockPriority.find((pr) => pr.value === chooses.choosePriority)?.label ||
      "";
    const keyword = searchKeyword.toLowerCase().trim();

    if (keyword === "" && categoryLabel === "" && priorityLabel === "") {
      setFilteredCards(cards);
    } else {
      const result = cards.filter(
        (card) =>
          card.title.toLowerCase().includes(keyword) &&
          (categoryLabel.toLowerCase() === "" ||
            card.category.toLowerCase().includes(categoryLabel)) &&
          (priorityLabel.toLowerCase() === "" ||
            card.priority.toLowerCase().includes(priorityLabel))
      );
      setFilteredCards(result);
    }
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

  return (
    <div>
      {/* Input nhập thẻ */}
      <div className="lg:flex items-center justify-between gap-[20px]">
        <input
          onChange={(e) => handleInput("title", e.target.value)}
          type="text"
          value={inputs.title}
          placeholder="Type Title Of Task"
          className="rounded-md bg-[#DBE2EF] h-[17px] border-[#B1B1B166] p-5 mt-5 w-[50%]"
        />

        <input
          onChange={(e) => handleInput("detail", e.target.value)}
          type="text"
          value={inputs.detail}
          placeholder="Detail Of Your Task"
          className="rounded-md bg-[#DBE2EF] h-[17px] border-[#B1B1B166] p-5 mt-5 w-[50%]"
        />

        <div
          onClick={handleAddCard}
          className="text-white text-xl bg-[#5C9967] w-[50px] h-[25px] flex items-center p-5 rounded-r-lg mt-5 cursor-pointer"
        >
          +
        </div>
      </div>
      {/*Nút option category priority  add card*/}
      <div className="lg:flex items-center justify-between gap-[20px] mt-[20px]">
        {/* Category select */}
        <select
          className="bg-[#DBE2EF] rounded-md w-[50%] h-[40px] p-2"
          value={inputs.category}
          onChange={(e) => handleInput("category", e.target.value)}
        >
          {mockCategory.map((e) => (
            <option key={e.value} value={e.value}>
              {e.label}
            </option>
          ))}
        </select>

        {/* Priority select */}
        <select
          className="bg-[#DBE2EF] rounded-md w-[50%] h-[40px] p-2"
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
      <div className="flex justify-between gap-[70px]">
        <div className="flex justify-between w-[48%] mt-[20px]">
          {/* Filter select  search*/}
          <select
            className="bg-[#F0D1A8] rounded-md w-[47%] h-[40px] p-2"
            value={chooses.chooseCategory}
            onChange={(e) => handleChoose("chooseCategory", e.target.value)}
          >
            {mockCategory.map((e) => (
              <option key={e.value} value={e.value}>
                {e.label}
              </option>
            ))}
          </select>
          <select
            className="bg-[#F0D1A8] rounded-md w-[47%] h-[40px] p-2"
            value={chooses.choosePriority}
            onChange={(e) => handleChoose("choosePriority", e.target.value)}
          >
            {mockPriority.map((e) => (
              <option key={e.value} value={e.value}>
                {e.label}
              </option>
            ))}
          </select>
        </div>

        {/* <!---Search --> */}
        <div className="mt-[20px] flex justify-self-start rounded-md border border-[#F0D1A8]">
          <input
            className="pl-[5px]"
            type="search"
            placeholder="Search by name"
            onChange={(e) => setSearchKeyword(e.target.value)}
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
      <div className="grid grid-cols-2 gap-[20px] mt-[20px]">
        {filteredCards.slice(0, visibleCards).map((card, index) => (
          <Card
            key={index}
            title={card.title}
            detail={card.detail}
            category={card.categoryLabel}
            priority={card.priorityLabel}
            isChecked={card.isChecked}
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
