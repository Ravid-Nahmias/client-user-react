import Button from "./Button";
const Header = ({ onClickAdd, showAdd }) => {
  return (
    <header className="header" style={{ direction: "rtl" }}>
      <h1> רשימת אנשים</h1>
      <Button
        className="btn"
        text={showAdd ? "סגור" : "טופס פרטים אישיים "}
        onclick={onClickAdd}
      ></Button>
    </header>
  );
};

export default Header;
