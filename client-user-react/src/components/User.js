import Button from "./Button";

const User = ({ user, onDelete, setUpdateID }) => {
  return (
    <tr className="user">
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <Button
        key={user.id}
        className="btn"
        text={"Update User"}
        onclick={() => setUpdateID(user.id)}
      ></Button>

      <Button onclick={() => onDelete(user.id)} text="Delete User">
        {" "}
      </Button>
    </tr>
  );
};

export default User;
