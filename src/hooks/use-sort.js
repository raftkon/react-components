import { useState } from "react";

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null); // null, asc, desc
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
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
  return { sortedData, setSortColumn, sortBy, sortOrder };
}

export default useSort;
