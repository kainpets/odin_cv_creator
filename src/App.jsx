import { useState } from "react";
import Form from "./components/Form.jsx";
import RenderInfoList from "./components/RenderInfoList.jsx";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [school, setSchool] = useState("");
  const [studies, setStudies] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState(new Date());
  const [beginDate, setBeginDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [submitted, setSubmitted] = useState(true);
  const [allValues, setAllValues] = useState([]);

  //TODO add the ability to generate a pdf file
  //TODO add the ability to add a photo
  //TODO add the ability to edit each field after its rendered

  return (
    <div className="App">
      <h1>CV Creator</h1>
      <Form
        onNameChange={handleNameChange}
        onEmailChange={handleEmailChange}
        onNumberChange={handleNumberChange}
        onSchoolChange={handleSchoolChange}
        onStudiesChange={handleStudiesChange}
        onDateOfStudyChange={handleDateOfStudyChange}
        onCompanyChange={handleCompanyChange}
        onPositionChange={handlePositionChange}
        onBeginDateChange={handleBeginDateChange}
        onEndDateChange={handleEndDateChange}
        onResetClick={handleResetClick}
        onSubmitClick={handleSubmit}
        value={[
          name,
          email,
          number,
          school,
          studies,
          dateOfStudy,
          company,
          position,
          beginDate,
          endDate,
          submitted,
        ]}
      />
      {allValues.length > 0 && <RenderInfoList values={allValues} />}
    </div>
  );

  function handleResetClick() {
    setAllValues([]);
    setName("");
    setEmail("");
    setNumber("")
    setSchool("")
    setCompany("")
    setPosition("")
    setStudies("")
    setBeginDate(new Date())
    setDateOfStudy(new Date())
    setEndDate(new Date())
  }

  function handleEndDateChange(e) {
    setEndDate(e.target.value);
  }

  function handleBeginDateChange(e) {
    setBeginDate(e.target.value);
  }

  function handlePositionChange(e) {
    setPosition(e.target.value);
  }

  function handleCompanyChange(e) {
    setCompany(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNumberChange(e) {
    setNumber(e.target.value);
  }

  function handleSchoolChange(e) {
    setSchool(e.target.value);
  }

  function handleStudiesChange(e) {
    setStudies(e.target.value);
  }

  function handleDateOfStudyChange(e) {
    setDateOfStudy(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(!submitted);
    setAllValues([
      ...allValues,
      name,
      email,
      number,
      school,
      studies,
      dateOfStudy,
      company,
      position,
      beginDate,
      endDate,
      submitted
    ]);
  }
}

export default App;
