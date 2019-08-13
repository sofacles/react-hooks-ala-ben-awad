import * as React from 'react';

enum ActionType {
  Add = 'add',
}

interface IState {
  allTasks: string[];
}

interface IAction {
  type: ActionType;
  payload: {
    text: string;
  };
}

const initialState: IState = {allTasks: [""]};

const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.Add:
      return {allTasks: state.allTasks.concat(action.payload.text)};
    default:
      throw new Error();
  }
}



const App = () => {
  const [state, dispatch] = React.useReducer<React.Reducer<IState, IAction>>(reducer, initialState);
  const [taskText, setTaskText] = React.useState("");

  return (
    <div>
      <ul>Tasks: {state.allTasks.map(t => <li key={t}>{t}</li>)}</ul>
      <div><input value={taskText} onChange={(e) => {
        setTaskText(e.target.value);
      }} /></div>
      <button onClick={
        () => {
          dispatch({type: ActionType.Add, payload: { text: taskText } });
        }
      }>Add task</button>
    </div>
  );
};

export default App;