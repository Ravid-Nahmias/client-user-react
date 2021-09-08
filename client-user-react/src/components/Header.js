import Button from "./Button";
const Header = ({ onClickAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>User List</h1>
      <Button
        className="btn"
        text={showAdd ? "Close" : "Add User"}
        onclick={onClickAdd}
      ></Button>
    </header>
  );
};

export default Header;
