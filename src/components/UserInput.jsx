const UserInput = () => {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-invesment">Initial Invesment</label>
          <input type="number" id="initial-invesment"/>
        </div>
        <div>
          <label htmlFor="annual-invesment">Annual Invesment</label>
          <input type="number" id="annual-invesment" />
        </div>
      </div>
      <div className="input-group" style={{marginTop:'1.25rem'}}>
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" id="expected-return"/>
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration"/>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
