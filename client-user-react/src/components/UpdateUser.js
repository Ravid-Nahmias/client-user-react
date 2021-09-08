import { useState } from "react";

const UpdateUser = ({ users, onUpdate, updateID }) => {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    var specUser = users.filter((user) => user.id === updateID);
    name = name.length > 0 ? name : specUser[0].name;
    email = email.length > 0 ? email : specUser[0].email;

    onUpdate({ id: updateID, name: name, email: email });
  };
  return (
    <form className="update-form" onSubmit={onSubmit}>
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
        value="Save changes"
        className="btn btn-block"
      ></input>
    </form>
  );
};

export default UpdateUser;
