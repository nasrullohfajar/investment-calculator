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

  console.log(userInput)

  function handleChange(inputIdentifier, newValue) {
    
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: parseFloat(newValue)
      }
    })
  } 

  return (
    <>
      <Header />
      <main>
        <UserInput userInput={userInput} handleChange={handleChange} />
        <Result data={userInput} />
      </main>
    </>
  );
}

export default App;
