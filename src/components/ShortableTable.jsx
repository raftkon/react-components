import React, { useState } from "react";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
const ShortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null); // null, asc, desc
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer px-8 group"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center ">
            {getIcons(column.label, sortBy, sortOrder)}
            <span
              className="border-b-2 border-b-transparent transition
              group-hover:border-b-2 group-hover:border-gray-500"
            >
              {column.label}
            </span>
          </div>
        </th>
      ),
    };
  });

  // Only sort data if sortOrder && sortBy are not null
  // Make copy of the 'data' prop, because we don't modify props and state
  // Find the correct sortValue function and use it for sorting

  let sortedData = data;

  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const order = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * order;
      } else {
        return (valueA - valueB) * order;
      }
    });
  }

  return (
    <div className="">
      <Table config={updatedConfig} data={sortedData} />
    </div>
  );
};

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy)
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  if (sortOrder === null)
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  else if (sortOrder === "asc")
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  else if (sortOrder === "desc")
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
}

export default ShortableTable;
