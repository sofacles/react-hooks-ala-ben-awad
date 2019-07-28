import React, {useState} from 'react';
import {useForm} from './useForm';
import { Hello } from './Hello';


function App() {

/*
 useEffect will be called every time the component renders.  To have it only run if, say, the password changes,
 pass an array containing values.password. If you pass in two properties, it will run when either of them change.
 If you pass an empty array, it will only run on first render.  So you can kind of use it like componentWillMount.

 You can return a funnction from the fxn that you pass to useEffect.  This function is a cleanup fxn.

*/
  const [values, handleChange] = useForm({
    email: '', 
    password: '',
    firstName: ''
  });

  const [showHello, setShowHello] = useState(true);
  
  return (

    
    <div className="App">
      <button onClick={() => setShowHello(!showHello)}>show Hello</button>
      { showHello && <Hello /> }
       <input
        name='firstName'
        placeholder='firstName'
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        name='email'
        placeholder='glen@glencoe.com'
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
        <span>{values.firstName}, {values.email}, {values.password},  </span>
      </div>
    </div>
  );
}

export default App;