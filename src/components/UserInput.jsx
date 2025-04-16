import { useState } from "react";

const UserInput = ({ userInput, handleChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-invesment">Initial Invesment</label>
          <input
            type="number"
            id="initial-invesment"
            value={userInput.initialInvestment}
            onChange={(event) => handleChange('initialInvestment', event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="annual-invesment">Annual Invesment</label>
          <input
            type="number"
            id="annual-invesment"
            value={userInput.annualInvestment}
            onChange={(event) => handleChange('annualInvestment', event.target.value)}
            required
          />
        </div>
      </div>
      <div className="input-group" style={{ marginTop: "1.25rem" }}>
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="number"
            id="expected-return"
            value={userInput.expectedReturn}
            onChange={(event) => handleChange('expectedReturn', event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(event) => handleChange('duration', event.target.value)}
            required
          />
        </div>
      </div>
    </section>
  );
};

export default UserInput;
