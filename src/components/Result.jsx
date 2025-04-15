import { calculateInvestmentResults } from "../util/investment";

const Result = ({ data }) => {
  const results = calculateInvestmentResults({
    initialInvestment: data.initialInvestment,
    annualInvestment: data.annualInvestment,
    expectedReturn: data.expectedReturn,
    duration: data.duration,
  });

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
      <tbody>
        {results.map((result) => {
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>$16,800</td>
              <td>$900</td>
              <td>$900</td>
              <td>$15,900</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
