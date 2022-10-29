import './App.css';
import { useState } from 'react';

function App() {

  const [cal, setCal] = useState('');
  const [result, setResult] = useState('');
  const opts = ['+', '-', '*', '/', '.'];


  // the && operator only returns true when both of its operands
  // are true (and false in all other cases), while the || operator
  // only returns false when both of its operands are false (and true in all other cases).

  const updatecal = (value) => {
    if ((opts.includes(value) && cal === '') ||
      (opts.includes(value) && opts.includes(cal.slice(-1)))
    ) {
      return;
    }

    setCal(cal + value)

    if (!opts.includes(value)) {
      setResult((eval(cal + value).toString()));
    }
  }

  const equal = () => {
    setCal(eval(cal).toString());
  }

  const singledigitremove = () => {
    if (cal == ' ') {
      return;
    }
    const value = cal.slice(0, -1);
    setCal(value);
  }

  const removeall = () => {
    setCal(" ") || setResult("0");
  }

  function Createdegit() {
    const degit = [];
    for (let i = 1; i < 10; i++) {
      degit.push(
        <button onClick={() => updatecal(i.toString())} key={i}>{i}</button>
      )
    }
    return degit;
  }

  return (
    <div className="App">
      <div className='calculator'>
        <div className='displayinput'>
          {result ? <span>({result})</span> : ''} {cal || "0"}
        </div>
        <div className='operator'>
          <button onClick={() => updatecal('+')}>+</button>
          <button onClick={() => updatecal('-')}>-</button>
          <button onClick={() => updatecal('*')}>*</button>
          <button onClick={() => updatecal('/')}>/</button>
          <button onClick={singledigitremove}>AC</button>
          <button onClick={removeall}>CE</button>
        </div>
        <div className='otherdigit'>
          {Createdegit()}
          <button onClick={() => updatecal('0')}>0</button>
          <button onClick={() => updatecal('.')}>.</button>
          <button onClick={equal}>=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
