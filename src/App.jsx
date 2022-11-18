import { useState } from "react";
import PersonalForm from "./components/PersonalForm.jsx";
import EducationForm from "./components/EducationForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";
import RenderPersonalInfo from "./components/RenderPersonalInfo.jsx";


function App() {

  function personalData(data) {
    return data;
  }

  return (
    <div className="App">
      <h1>CV Creator</h1>
      <PersonalForm value={personalData}/>
      <EducationForm />
      <ExperienceForm />
      {personalData() && <RenderPersonalInfo value={personalData()}/>}
    </div>
  );
}

export default App;
