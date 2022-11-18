import { useState } from "react";

export default function EducationForm() {
  const [school, setSchool] = useState("");
  const [city, setCity] = useState("");
  const [degree, setDegree] = useState("");
  const [start, setStart] = useState(new Date())
  const [end, setEnd] = useState(new Date())

  return (
    <>
    <h2>Education</h2>
    <form>
      <label htmlFor="school">School Name</label>
      <input
        type="text"
        id="school"
        school={school}
        onChange={(e) => setSchool(e.target.value)}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        city={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <label htmlFor="degree">Title of study</label>
      <input
        type="text"
        id="degree"
        degree={degree}
        onChange={(e)=> setDegree(e.target.value)}
      />
      <label htmlFor="start">From</label>
      <input
        type="date"
        id="start"
        start={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <label htmlFor="end">To</label>
      <input
        type="date"
        id="end"
        end={end}
        onChange={(e) => setEnd(e.target.value)}
      />
      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}
