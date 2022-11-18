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
}

export default App;
