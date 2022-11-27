import Table from "./Table";

const Body = ({ users, onDelete, updateID, setUpdateID }) => {
  return (
    <div style={{ direction: "rtl" }}>
      <Table
        style={{ textAlign: "right", flex: "1" }}
        users={users}
        onDelete={onDelete}
        updateID={updateID}
        setUpdateID={setUpdateID}
      ></Table>
    </div>
  );
};

export default Body;
