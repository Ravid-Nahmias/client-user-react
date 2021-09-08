import { useState } from "react";
const AddUser = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please add a name");
      return;
    }
    if (!email) {
      alert("Please add an email");
      return;
    }
    onAdd({ name, email });
    setName("");
    setEmail("");
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <input
        type="submit"
        value="Create User"
        className="btn btn-block"
      ></input>
    </form>
  );
};

export default AddUser;
