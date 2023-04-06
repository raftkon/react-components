import React, { Fragment } from "react";

/**
 * It accepts an array of objects to render called data
 * and an array of objects called config regarding
 * the headers which includes:
 * - label: 'string' for the header name
 * - header (optional): 'function' for custom header
 * - render: 'function' for the content to render for the whole column
 * - sortValue: 'function' for the item you want to sort with
 */

const Table = ({ data, config }) => {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedTable = data.map((rowData, idx) => {
    const renderedCells = config.map((column) => {
      return (
        <td key={column.label} className="text-center p-3">
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
