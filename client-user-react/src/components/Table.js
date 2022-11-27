import React from "react";
import Users from "./Users";

const Table = ({ users, onDelete, updateID, setUpdateID }) => {
  return (
    <table>
      <tbody id="content">
        <tr>
          <th style={{ padding: "10px" }}>שם פרטי</th>
          <th style={{ padding: "10px" }}>שם משפחה</th>
          <th style={{ padding: "10px" }}>ת.ז</th>
          <th style={{ padding: "10px" }}>תאריך לידה </th>
          <th style={{ padding: "10px" }}>מין</th>
          <th style={{ padding: "10px" }}> קופת חולים </th>
          <th style={{ padding: "10px" }}> ילדים</th>
        </tr>
        <Users
          users={users}
          onDelete={onDelete}
          updateID={updateID}
          setUpdateID={setUpdateID}
        ></Users>
      </tbody>
    </table>
  );
};

export default Table;
