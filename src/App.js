import React, {useState} from 'react';
import {useForm} from './useForm';
import { useFetch } from './useFetch';

function App() {

/*
 You can use a useEffect hook to "watch" something like url and update state (our "data" variable below).
 See useFetch.js
*/

  const [count, setCount ] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
 
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