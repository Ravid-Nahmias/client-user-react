import Button from "./Button";
import UpdateUser from "./UpdateUser";
import { useState } from "react";

const User = ({ user, onDelete, onClickUpdate, showUpdate, setShowUpdate }) => {
  return (
    <tr className="user">
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <Button
        className="btn"
        text={showUpdate ? "close" : "Update User"}
        onclick={() => setShowUpdate(!showUpdate)}
      ></Button>
      {showUpdate && (
        <UpdateUser onClickUpdate={onClickUpdate} user={user}></UpdateUser>
      )}
      <Button onclick={() => onDelete(user.id)} text="Delete User">
        {" "}
      </Button>
    </tr>
  );
};

export default User;
