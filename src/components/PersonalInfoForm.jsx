export default function PersonalInfoForm(props) {
  const [name, email, number] = props.value;
  return (
    <>
      <form onSubmit={props.onSubmitClick}>
        <h2>Personal Info</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name={name} onChange={props.onNameChange}></input>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" email={email} onChange={props.onEmailChange}></input>
        <label htmlFor="number" >Phone number</label>
        <input type="number" id="number" number={number} onChange={props.onNumberChange}></input>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}