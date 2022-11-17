import { useState } from "react";
import Form from "./components/Form.jsx";
import RenderInfoList from "./components/RenderInfoList.jsx";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [school, setSchool] = useState("");
  const [studies, setStudies] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState(new Date());
  const [allValues, setAllValues] = useState([]);

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
    setAllValues([
      ...allValues,
      name,
      email,
      number,
      school,
      studies,
      dateOfStudy,
    ]);
  }

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
        onSubmitClick={handleSubmit}
        value={[name, email, number, school, studies, dateOfStudy]}
      />
      {allValues.length > 0 && <RenderInfoList values={allValues} />}
    </div>
  );
}

export default App;
