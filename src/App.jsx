import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

import { useState } from "react";

function App() {
  const [data, setData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 1,
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Header />
      <main>
        <UserInput data={data} onChange={handleChange} />
        <Result data={data} />
      </main>
    </>
  );
}

export default App;
