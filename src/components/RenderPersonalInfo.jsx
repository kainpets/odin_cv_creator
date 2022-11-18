
export default function RenderPersonalInfo(props) {
  console.log(props)
  return (
    <>
      <ul>
        {props.values.map((value, index) => (
            <li key={index}>{value.toString()}</li>
        ))}
      </ul>
      
    </>
  );
}
