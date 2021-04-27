import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table table-sm text-responsive">
      {/* <tbodu>
        <tr>
          <td>{ data.course.courseName}</td>
          <td></td>
        </tr>
      </tbodu> */}
      
      
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
