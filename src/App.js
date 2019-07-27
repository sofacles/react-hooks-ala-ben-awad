import React, { useEffect } from 'react';
import {useForm} from './useForm';


function App() {

/*
  Now use your own hook, 'useForm' to be kind of a reducer.  Like useState(), it returns an arr with two
  items: the state, and an expression where you call the name of the function that's second in its internal
  usage of useState: [state, stateUpdatingFxn], passing it a new object based on state with whatever override 
  you want to make.

*/
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