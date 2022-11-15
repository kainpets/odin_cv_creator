export default function EducationInfoForm(props) {
const [school, studies, dateOfStudy] = props.values

  return (
    <>
      <form onSubmit={props.onSubmitClick}>
        <h2>Studies</h2>
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