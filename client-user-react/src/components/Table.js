import React from "react";
import Users from "./Users";

const Table = ({ users, onDelete, updateID, setUpdateID }) => {
  return (
    <table>
      <tbody id="content">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
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
