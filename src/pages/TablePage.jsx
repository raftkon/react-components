import React from "react";
import Table from "../components/Table";

const TablePage = () => {
  const data = [
    { name: "Banana", color: "bg-yellow-500", score: "1" },
    { name: "Orange", color: "bg-orange-500", score: "5" },
    { name: "Apple", color: "bg-red-300", score: "3" },
    { name: "Lime", color: "bg-green-500", score: "4" },
  ];

  const config = [
    { label: "Fruits", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => (
        <span className={`p-3 inline-block m-2 ${fruit.color}`} />
      ),
    },
    { label: "Score", render: (fruit) => fruit.score },
  ];

  return (
    <div>
      <Table data={data} config={config} />
    </div>
  );
};

export default TablePage;
