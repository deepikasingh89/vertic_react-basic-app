function NumberList(props) {
 // const number = [1, 2, 3, 4, 5, 5];
  // const listItems =

  return (
    <ul>
      {props.number.map((n, i) => (
        <li key={i}>{n}</li>
      ))}
    </ul>
  );
}

export default NumberList;
