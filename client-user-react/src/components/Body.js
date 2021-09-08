import Table from "./Table";

const Body = ({
  users,
  onDelete,
  onClickUpdate,
  showUpdate,
  setShowUpdate,
}) => {
  return (
    <div>
      <Table
        users={users}
        onDelete={onDelete}
        onUpdate={onClickUpdate}
        showUpdate={showUpdate}
        setShowUpdate={setShowUpdate}
      ></Table>
    </div>
  );
};

export default Body;
