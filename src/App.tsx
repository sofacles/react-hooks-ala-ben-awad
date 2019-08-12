import * as React from 'react';

enum ActionType {
  Increment = 'increment',
  Decrement = 'decrement',
}

interface IState {
  count: number;
}

interface IAction {
  type: ActionType;
  payload: {
    count: number; 
  };
}

const initialState: IState = {count: 0};

const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.Increment:
      return {count: state.count + action.payload.count};
    case ActionType.Decrement:
      return {count: state.count - action.payload.count};
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer<React.Reducer<IState, IAction>>(reducer, initialState);

  return (
    <div>
      <div>Count: {state.count}</div>
      <button onClick={
        () => dispatch({type: ActionType.Increment, payload: { count: 1 } })
      }>+</button>
      <button onClick={
        () => dispatch({type: ActionType.Decrement, payload: { count: 1 }})
      }>-</button>
    </div>  
  );
};

export default App;