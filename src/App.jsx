import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(e) {
    const value = parseFloat(e.target.value);
    setUserInput({ ...userInput, [e.target.name]: value });
  } 

  return (
    <>
      <Header />
      <main>
        <UserInput data={userInput} onChange={handleChange} />
        <Result data={userInput} />
      </main>
    </>
  );
}

export default App;
