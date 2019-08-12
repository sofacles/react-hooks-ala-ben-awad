import * as React from 'react';

enum ActionType {
  Increment = 'increment',
  Decrement = 'decrement',
}

interface IState {
  enteredNumbers: number[];
}

interface IAction {
  type: ActionType;
  payload: {
    x: number;
  };
}

const initialState: IState = {enteredNumbers: [0]};

const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.Increment:
      return {enteredNumbers: state.enteredNumbers.concat(action.payload.x)};
    case ActionType.Decrement:
      return {enteredNumbers: state.enteredNumbers.concat(action.payload.x * 10) };
    default:
      throw new Error();
  }
}



const App = () => {
  const [state, dispatch] = React.useReducer<React.Reducer<IState, IAction>>(reducer, initialState);
  const [candidate, setCandidate] = React.useState(0);

  return (
    <div>
      <div>Numbers: {state.enteredNumbers.map(n => <span key={n}>{n},</span>)}</div>
      <div><input value={candidate} onChange={(e) => {
        setCandidate((e.target.value) as unknown as number)
      }} /></div>
      <button onClick={
        () => dispatch({type: ActionType.Increment, payload: { x: candidate } })
      }>+</button>
      <button onClick={
        () => dispatch({type: ActionType.Decrement, payload: { x: candidate }})
      }>-</button>
    </div>
  );
};

export default App;