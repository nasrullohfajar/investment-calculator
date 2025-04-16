import { useState } from "react";

const UserInput = ({ data, onChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-invesment">Initial Invesment</label>
          <input
            type="number"
            id="initial-invesment"
            name="initialInvestment"
            value={data.initialInvestment}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="annual-invesment">Annual Invesment</label>
          <input
            type="number"
            id="annual-invesment"
            name="annualInvestment"
            value={data.annualInvestment}
            onChange={onChange}
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
            name="expectedReturn"
            value={data.expectedReturn}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={data.duration}
            onChange={onChange}
            required
          />
        </div>
      </div>
    </section>
  );
};

export default UserInput;
