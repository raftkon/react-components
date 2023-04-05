import React, { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";
const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const renderedItems = items.map(({ label, content }, idx) => {
    const isExpanded = idx === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={idx} className="transition-all">
        <div
          className="flex p-3 bg-gray-50 border-b justify-between items-center cursor-pointer"
          onClick={() => handleClick(idx)}
        >
          {label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
