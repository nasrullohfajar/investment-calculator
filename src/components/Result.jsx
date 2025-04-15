const Result = ({ data }) => {
  const table = Array.from({ length: data.duration }, (_, i) => (
    <tr>
      <td>{i + 1}</td>
      <td>$16,800</td>
      <td>$900</td>
      <td>$900</td>
      <td>$15,900</td>
    </tr>
  ));
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invesment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{table}</tbody>
    </table>
  );
};

export default Result;
