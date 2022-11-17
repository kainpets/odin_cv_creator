export default function PersonalInfoForm(props) {
  const [name, email, number, school, studies, dateOfStudy, position, company, beginDate, endDate, submitted] = props.value;
  return (
    <>
      <form onSubmit={props.onSubmitClick}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name={name} onChange={props.onNameChange}></input>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" email={email} onChange={props.onEmailChange}></input>
        <label htmlFor="number" >Phone number</label>
        <input type="tel" id="number" number={number} onChange={props.onNumberChange}></input>
        <label htmlFor="school">School Name</label>
        <input type="text" id="school" school={school} onChange={props.onSchoolChange}/>
        <label htmlFor="studies">Title of study</label>
        <input type="text" id="studies" studies={studies} onChange={props.onStudiesChange}/>
        <label htmlFor="date-of-study">Date your study ended</label>
        <input type="date" id="date-of-study" date-of-study={dateOfStudy} onChange={props.onDateOfStudyChange}/>
        <label htmlFor="position">Current job position</label>
        <input type="text" id="position" position={position} onChange={props.onPositionChange}/>
        <label htmlFor="company">Current company</label>
        <input type="text" id="company" company={company} onChange={props.onCompanyChange}/>
        <label htmlFor="begin-date">Work begun</label>
        <input type="date" id="begin-date" begin-date={beginDate} onChange={props.onBeginDateChange}/>
        <label htmlFor="end-date">Work ended</label>
        <input type="date" id="end-date" end-date={endDate} onChange={props.onEndDateChange}/>
        <label htmlFor="photo">Photo</label>
        <input type="file" id="photo" accept=".jpg, .jpeg, .png"/>
        <button type="submit">Submit</button>
        <button disabled={submitted} type="reset" onClick={props.onResetClick}>Reset</button>
      </form>
    </>
  )
}