import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

const DropdownPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex">
      <Dropdown
        onChange={handleSelectOption}
        value={selectedOption}
        options={options}
      />
      <Dropdown
        onChange={handleSelectOption}
        value={selectedOption}
        options={options}
      />
    </div>
  );
};

export default DropdownPage;
