import {useState} from "react";

export default function RenderInfoList(props) {
  const [values, setValues] = useState(props.values) 

  return (
    <>
      <ul>
        {values.map((value, index) => (
            <li key={index}>{value.toString()}</li>
        ))}
      </ul>
      
    </>
  );
}
