import React, { useState, useEffect } from 'react';

function App() {

  const [webResponse, setWebResponse] = useState('');
  let [count, setCount] = useState(0);
  let url = `http://numbersapi.com/${count}/trivia`;

  // useEffect(() => {
  //   const onMouseMove = (e : MouseEvent) => //console.log(e);
  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     //console.log("In the cleanup function");
  //     window.removeEventListener("mousemove", onMouseMove);
  //   }
  // }, []);

  useEffect(()=> {
    console.log("useEffect is called");
    fetch(url)
    .then(x => { 
      console.log(`In the then, I'm getting ${x}`);
      return x.text();
    } )
    .then(y => {
      setWebResponse(y);
    });
  }, [url]);

  return (
    <div className="App">
      
      <div>
        <span>{webResponse} </span>
      </div>
      <button onClick={() => {
        setCount((c) => c + 1);
        console.log(`url is ${url}`);
      }}>increment</button>
    </div>
  );
}

export default App;