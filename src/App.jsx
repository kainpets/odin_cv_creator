import { useState } from "react";
import PersonalInfoForm from "./components/PersonalInfoForm.jsx";
import EducationInfoForm from "./components/EducationInfoForm.jsx";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [school, setSchool] = useState("");
  const [studies, setStudies] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState(new Date());

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNumberChange(e) {
    setNumber(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleSchoolChange(e) {
    setSchool(e.target.value);
  }

  function handleStudiesChange(e) {
    setStudies(e.target.value);
  }
  
  function handleDateOfStudyChange(e) {
    setDateOfStudy(e.target.value)
  }

  return (
    <div className="App">
      <h1>CV Creator</h1>
      <PersonalInfoForm
        onNameChange={handleNameChange}
        onEmailChange={handleEmailChange}
        onNumberChange={handleNumberChange}
        onSubmitClick={handleSubmit}
        value={[name, email, number]}
      />
      <EducationInfoForm 
        onSchoolChange={handleSchoolChange}
        onStudiesChange={handleStudiesChange}
        onDateOfStudyChange={handleDateOfStudyChange}
        values={[school, studies, dateOfStudy]}
      />
    </div>
  );
}

export default App;
