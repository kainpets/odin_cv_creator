export default function PersonalInfoForm(props) {
  const [name, email, number, school, studies, dateOfStudy] = props.value;
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
        <label htmlFor="school">School Name</label>
        <input type="text" id="school" school={school} onChange={props.onSchoolChange}/>
        <label htmlFor="studies">Title of study</label>
        <input type="text" id="studies" studies={studies} onChange={props.onStudiesChange}/>
        <label htmlFor="date-of-study">Date of study</label>
        <input type="date" id="date-of-study" date-of-study={dateOfStudy} onChange={props.onDateOfStudyChange}/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}