import React, {useEffect} from 'react';
import {useForm} from './useForm';

function App() {

/*
 Here's a practical example of useEffect. Attach mousemove when the component renders, and when 
 the component gets destroyed (which might not happen here, because we're in the app component) we can
 detach our eventListener and not leak memory.
*/

  useEffect(() => {
    const onMouseMove = e => {
      console.log(e);
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mouseMove', onMouseMove);
    };
  }, []);
 
  const [values, handleChange] = useForm({
    email: '', 
    password: '',
    firstName: ''
  });

  return (
    <div className="App">
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