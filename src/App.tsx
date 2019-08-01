import React, { useState, useEffect } from 'react';

function App() {

  // I'm simplifying things a lot and I'm going to switch to typescript.

  const [email, setEmail] = useState('a@b.com');

  useEffect(() => {
    const onMouseMove = (e : MouseEvent) => console.log(e);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      //console.log("In the cleanup function");
      window.removeEventListener("mousemove", onMouseMove);
    }
  }, []);

  return (
    <div className="App">
      <input
        name='email'
        type="text"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
      />
      
      <div>
        <span>{email} </span>
      </div>
    </div>
  );
}

export default App;