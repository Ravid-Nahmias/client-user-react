import Header from "./components/Header";
import Body from "./components/Body";
import AddUser from "./components/AddUser";
import { useEffect } from "react";
import { useState } from "react";
import UpdateUser from "./components/UpdateUser";

function App() {
  const [showAddUser, setShowAddUser] = useState(false);
  const [updateID, setUpdateID] = useState(null);
  const [users, setUsers] = useState([]);
  // Load Data
  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers();
      setUsers(usersFromServer);
    };
    getUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      console.log("starting");
      // const result = await fetch("http://localhost:3000/user");
      // return await result.json();
    } catch (error) {
      console.log(error);
    }
  };

  //Add User
  const addUser = async (user) => {
    try {
      const URL = "http://localhost:3000/user";
      console.log(URL);
      const resault = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      console.log("Create user succed");
      const resaultJson = await resault.json();
      setUsers({ id: resaultJson.id });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  //Update User
  const updateUser = async (user) => {
    try {
      const URL = "http://localhost:3000/user/" + user.id;
      var userToSend = { name: user.name, email: user.email };
      var result = await fetch(URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userToSend),
      });
      console.log(result);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  //Delete User
  const deleteUser = async (id) => {
    try {
      const URL = "http://localhost:3000/user/" + id;
      await fetch(URL, {
        method: "DELETE",
      });
      console.log("Delete user succed");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <Header
        onClickAdd={() => setShowAddUser(!showAddUser)}
        showAdd={showAddUser}
      ></Header>
      {showAddUser && <AddUser onAdd={addUser}></AddUser>}

      <Body
        users={users}
        onDelete={deleteUser}
        updateID={updateID}
        setUpdateID={setUpdateID}
      ></Body>
      {updateID && (
        <UpdateUser
          users={users}
          onUpdate={updateUser}
          updateID={updateID}
        ></UpdateUser>
      )}
    </div>
  );
}

export default App;
