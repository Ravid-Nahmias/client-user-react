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
      const result = await fetch("http://localhost:3000/user");
      return await result.json();
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

  return (
    <div className="container">
      <Header
        onClickAdd={() => setShowAddUser(!showAddUser)}
        showAdd={showAddUser}
      ></Header>
      {showAddUser && <AddUser onAdd={addUser}></AddUser>}
    </div>
  );
}

export default App;
