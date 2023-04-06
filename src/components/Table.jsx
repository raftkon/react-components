import React from "react";

const Table = ({ data, config }) => {
  const renderedTable = data.map((rowData, idx) => {
    const renderedCells = config.map((column) => {
      return (
        <td key={column.label} className="p-3">
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr key={idx} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  const renderedHeaders = config.map((columnConfig) => {
    return <th key={columnConfig.label}>{columnConfig.label}</th>;
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedTable}</tbody>
    </table>
  );
};

export default Table;
