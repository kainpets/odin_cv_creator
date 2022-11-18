import { useState } from "react";

export default function ExperienceForm() {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [begin, setBegin] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  return (
    <>
      <h2>Experience</h2>
      <form>
        <label htmlFor="position">Job title</label>
        <input
          type="text"
          id="position"
          position={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          company={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <label htmlFor="begin">From</label>
        <input
          type="date"
          id="begin"
          begin={begin}
          onChange={(e) => setBegin(e.target.value)}
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
