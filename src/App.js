import React, { useEffect, useState } from 'react';
import {useForm} from './useForm';
import { useFetch } from './useFetch';

function App() {

/*
 Watch count and update localStorage when it changes.
 But, we don't want to read localStorage every render, so use one of those initialization functions for "expensive"
 operations.
*/
  const expensiveInitialization = () => {
    console.log("expensiveInitialization should only be called once")
    return JSON.parse(localStorage.getItem("count") || 0)
};
  const [count, setCount ] = useState(() => expensiveInitialization());
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
  }, [count]);
 
  const [values, handleChange] = useForm({
    email: '', 
    password: '',
    firstName: ''
  });

  return (
    <div className="App">
      <div>{ !data ? "loading..." : data }</div>
      <div>count: {count} <button onClick={(e) => {
        setCount(c => c + 1);
      }}>+</button></div>
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
        <span>{values.firstName}, {values.email}, {values.password}, {loading ? "...fetching": "done"}  </span>
      </div>
    </div>
  );
}

export default App;