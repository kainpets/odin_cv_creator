import { useState } from "react";
import PersonalForm from "./components/PersonalForm.jsx";
import EducationForm from "./components/EducationForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";
import RenderInfoList from "./components/RenderInfoList.jsx";

function App() {

  return (
    <div className="App">
      <h1>CV Creator</h1>
      <PersonalForm />
      <EducationForm />
      <ExperienceForm />
    </div>
  );

  function handleResetClick() {
    setAllValues([]);
    setName("");
    setEmail("");
    setNumber("");
    setSchool("");
    setCompany("");
    setPosition("");
    setStudies("");
    setBeginDate(new Date());
    setDateOfStudy(new Date());
    setEndDate(new Date());
    setSubmitted(previouslySubmitted => !previouslySubmitted);
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
      submitted,
    ]);
  }
}

export default App;
