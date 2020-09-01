import React,{ useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [factor, setFactor] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFactor(factorial(number|0));
  }
  const factorial = (n)=> {
    var r=1;
    while (n > 0) r *= n--;
    return r;
  }
  return (
    <div>
      <h1>Factorial Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input value={number} type="number" placeholder="Enter a number..." onChange={e => setNumber(e.target.value) }/>
        <br />
        <button>Calculate Factorial</button>
      </form>
      <h2>Factorial: {factor}</h2>
    </div>
  );
}

