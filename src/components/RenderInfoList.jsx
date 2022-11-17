export default function RenderInfoList(props) {

  return (
    <>
      <ul>
        {props.values.map((prop, index) => (
            <li key={index}>{prop.toString()}</li>
        ))}
      </ul>
    </>
  );
}
