import Button from "./Button";

const User = ({ user, onDelete, setUpdateID }) => {
  return (
    <tr className="user">
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <Button
          key={user.id}
          className="btn"
          text={"Update User"}
          onclick={() => setUpdateID(user.id)}
        ></Button>
      </td>

      <td>
        <Button onclick={() => onDelete(user.id)} text="Delete User">
          {" "}
        </Button>
      </td>
    </tr>
  );
};

export default User;
