import { useState } from "react";

export default function PersonalForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [values, setValues] = useState([]);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h2>Personal info</h2>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          first-name={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          last-name={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          email={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="number">Phone number</label>
        <input
          type="tel"
          id="number"
          number={number}
          onChange={(e) => setNumber(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </>
  );

  function handleFormSubmit(e) {
    e.preventDefault();
    setValues([...values, firstName, lastName, email, number]);
    props.value(values);
  }
}
