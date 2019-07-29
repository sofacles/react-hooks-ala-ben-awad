import React, { useState } from 'react';

function App() {

  // I'm simplifying things a lot and I'm going to switch to typescript.

  const [email, setEmail] = useState('a@b.com');

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