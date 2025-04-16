import { calculateInvestmentResults, formatter } from "../util/investment";

const Result = ({ data }) => {
  const results = calculateInvestmentResults({
    initialInvestment: data.initialInvestment,
    annualInvestment: data.annualInvestment,
    expectedReturn: data.expectedReturn,
    duration: data.duration,
  });

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
            data.initialInvestment + (result.year * data.annualInvestment)
          ;
          let invesmentValue = totalInterest + investedCapital

          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(invesmentValue)}</td>
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
