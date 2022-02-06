import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  const [testV, setTestValue] = useState();
  const [answerValue, setanswerValue] = useState(0);

  const letsCount = () => {
    setanswerValue(eval(testV));
    console.log(answerValue);
  }


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input id="mainField" placeholder="example: 2+2=" onKeyUp={event => {setTestValue(event.target.value); letsCount();}}></input>
          <p>{answerValue}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
