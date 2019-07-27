import React, { useState } from 'react';
import {useForm} from './useForm';


function App() {

  // You can use more than one useState, which allows you to not have to do any Object assigning stuff.
  // Ben Awad says the way he decides whether to use one view state that operates on objects or two that each operate on primitives
  // is: if you're updating both values in the same function, use objects and a single useState.  Otherwise, use two useStates

  const [values, handleChange] = useForm({email: '', password: ''});

  return (
    <div className="App">
      <input
        name='email'
        type="text"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name='password'
        type="password" 
        value={values.password}
        onChange={handleChange}
      />
      <div>
        <span>{values.email}, {values.password} </span>
      </div>
    </div>
  );
}

export default App;