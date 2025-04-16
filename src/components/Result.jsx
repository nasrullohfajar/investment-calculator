import { calculateInvestmentResults, formatter } from "../util/investment";

const Result = ({ userInput }) => {
  const results = calculateInvestmentResults(userInput);
  let totalInterest = 0;

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
          totalInterest = totalInterest + result.interest;
          let investedCapital =
            userInput.initialInvestment +
            result.year * userInput.annualInvestment;
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
