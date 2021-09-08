import User from "./User";

const Users = ({
  users,
  onDelete,
  onclickUpdate,
  showUpdate,
  setShowUpdate,
}) => {
  return (
    <>
      {users.map((user, index) => (
        <User
          iskey={index}
          user={user}
          onDelete={onDelete}
          onclickUpdate={onclickUpdate}
          showUpdate={showUpdate}
          setShowUpdate={setShowUpdate}
        ></User>
      ))}
    </>
  );
};

export default Users;
