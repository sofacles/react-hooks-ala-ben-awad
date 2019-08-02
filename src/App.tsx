import React, { useState } from 'react';
import { useFetch } from './useFetch';

function App() {

  let [count, setCount] = useState(0);
  let url = `http://numbersapi.com/${count}/trivia`;

  // ergebnis will be kept live by the useEffect inside the custom hook: useFetch
  // Note that this expression matches the type I declare as hook in useFetch, but later commented out.  
  // Maybe it's because it can infer the type of url?  
  var ergebnis = useFetch(url);

  return (
    <div className="App">
      <div>
        <span>{ergebnis}</span>
      </div>
      <button onClick={() => {
        setCount((c) => c + 1);
        console.log(`url is ${url}`);
      }}>increment</button>
    </div>
  );
}

export default App;