import { useState } from "react";
import Select from "react-select";
const AddUser = ({ onAdd }) => {
  const [private_name, setPrivateName] = useState("");
  const [last_name, setLastName] = useState("");
  const [id, setID] = useState("");
  const [birth_date, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [helth_fund, setHealthFund] = useState("");
  const [kids, setKids] = useState("");
  const gender_options = [
    { value: "זכר", label: "זכר" },
    { value: "נקבה", label: "נקבה" },
  ];
  const helth_options = [
    { value: "מאוחדת", label: "מאוחדת" },
    { value: "כללית", label: "כללית" },
    { value: "לאומית", label: "לאומית" },
    { value: "אחר", label: "אחר" },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    if (!private_name) {
      alert("נא למלא שם פרטי");
      return;
    }
    if (!last_name) {
      alert("נא למלא שם משפחה");
      return;
    }
    if (!id) {
      alert("נא למלא ת.ז");
      return;
    }
    if (!birth_date) {
      alert("נא למלא תאריך לידה");
      return;
    }
    if (!gender) {
      alert("נא למלא מין");
      return;
    }
    if (!helth_fund) {
      alert("נא למלא קופת חולים");
      return;
    }
    if (!kids) {
      alert("נא למלא מידע על ילדים");
      return;
    }

    onAdd({
      private_name,
      last_name,
      id,
      birth_date,
      gender,
      helth_fund,
      kids,
    });
    setPrivateName("");
    setLastName("");
    setID("");
    setBirthDate("");
    setGender("");
    setHealthFund("");
    setKids("");
  };
  return (
    <form
      className="add-form"
      onSubmit={onSubmit}
      style={{ textAlign: "right", direction: "rtl" }}
    >
      <div className="form-control">
        <label>שם פרטי</label>
        <input
          type="text"
          placeholder="שם פרטי"
          value={private_name}
          onChange={(e) => setPrivateName(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>שם משפחה</label>
        <input
          type="text"
          placeholder="שם משפחה"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>ת.ז</label>
        <input
          type="text"
          placeholder="ת.ז"
          value={id}
          onChange={(e) => setID(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label> תאריך לידה</label>
        <input
          type="text"
          placeholder="תאריך לידה"
          value={birth_date}
          onChange={(e) => setBirthDate(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>מין (זכר / נקבה)</label>
        <Select
          options={gender_options}
          type="text"
          placeholder="מין (זכר/ נקבה)"
          value={gender}
          onChange={(e) => setGender(e.value)}
        ></Select>
      </div>
      <div className="form-control">
        <label> קופת חולים</label>
        <input
          type="text"
          placeholder="קופת חולים"
          value={helth_fund}
          onChange={(e) => setHealthFund(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>ילדים </label>
        <input
          type="text"
          placeholder="ילדים"
          value={kids}
          onChange={(e) => setKids(e.target.value)}
        ></input>
      </div>
      <input type="submit" value="שמירה" className="btn btn-block"></input>
    </form>
  );
};

export default AddUser;
