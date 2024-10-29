import React, { useState } from 'react';

 

function CalculadoraSimples() {

  const [result, setResult] = useState('');

  const handleClick = (e) => setResult(result + e.target.name);

  const clear = () => setResult('');

  const calculate = () => setResult(eval(result));

 

  return (

    <div>

      <input type="text" value={result} readOnly />

      <div>

        <button onClick={clear}>C</button>

        <button name="1" onClick={handleClick}>1</button>

        <button name="2" onClick={handleClick}>2</button>

        <button name="+" onClick={handleClick}>+</button>

        <button onClick={calculate}>=</button>

      </div>

    </div>

  );

}

 

export default CalculadoraSimples;