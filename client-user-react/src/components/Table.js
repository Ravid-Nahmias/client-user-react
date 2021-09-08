import React from "react";
import Users from "./Users";

const Table = ({
  users,
  onDelete,
  onClickUpdate,
  showUpdate,
  setShowUpdate,
}) => {
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
          onclickUpdate={onClickUpdate}
          showUpdate={showUpdate}
          setShowUpdate={setShowUpdate}
        ></Users>
      </tbody>
    </table>
  );
};

// var listItems = this.state.data.map(function(person, i) {
//     return(
//         <tr key={i}>
//             <td>{person['name']}</td>
//             <td>{person['email']}</td>
//         </tr>
//     )
// });
// const styleTable= {
//   border: '1px solid black',
//   margin-bottom: '15px',
//   align-items: 'center',
// }
export default Table;
