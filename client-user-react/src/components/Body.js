import Table from "./Table";

const Body = ({ users, onDelete, updateID, setUpdateID }) => {
  return (
    <div>
      <Table
        users={users}
        onDelete={onDelete}
        updateID={updateID}
        setUpdateID={setUpdateID}
      ></Table>
    </div>
  );
};

export default Body;
