export default function RenderInfoList(props) {
  console.log(props);
  return (
    <>
      <ul>
        {props.map((prop, index) => (
          <>
            <li key={index}>{prop.toString()}</li>
          </>
        ))}
      </ul>
    </>
  );
}
