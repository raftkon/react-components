import React, { useEffect, useState, useRef } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divElement = useRef();

  useEffect(() => {
    const handler = (event) => {
      // there is a case when we decide not to show an element
      // to the screen, in that case divElement is null
      // so we add an additional check
      if (!divElement.current) {
        return;
      }
      if (!divElement.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleToggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOption = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => handleClickOption(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={divElement} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleToggleIsOpen}
      >
        {value?.label || "Select..."}
        {isOpen ? (
          <GoChevronDown className="text-lg" />
        ) : (
          <GoChevronLeft className="text-lg" />
        )}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
};

export default Dropdown;
