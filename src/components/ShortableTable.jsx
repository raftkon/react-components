import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import useSort from "../hooks/use-sort";

const ShortableTable = (props) => {
  const { config, data } = props;

  const { sortedData, setSortColumn, sortBy, sortOrder } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer px-8 group"
          onClick={() => setSortColumn(column.label)}
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

  return <Table config={updatedConfig} data={sortedData} />;
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
