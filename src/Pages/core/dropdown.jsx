import React, { useState } from "react";

const DropdownNav = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.optionList[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = props.optionList;

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };


  return (
    <div className="relative inline-block text-gray-800">
      <div
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 cursor-pointer w-[150px]"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedOption ? selectedOption : "Select an option"}
      </div>
      {isDropdownOpen && (
        <div className="absolute w-[150px] z-10 mt-2 rounded-lg border border-gray-300 bg-white shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              className="w-[150px] px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownNav;
