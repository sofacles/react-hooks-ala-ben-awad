import * as React from 'react';

enum ActionType {
  Add = 'add',
}

interface Task {
  text: string
}
interface IState {
  allTasks: Task[];
}

interface IAction {
  type: ActionType;
  payload: {
    text: string;
  };
}

const initialState: IState = {allTasks: []};

const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.Add:
      return {allTasks: state.allTasks.concat({ text: action.payload.text })};
    default:
      throw new Error();
  }
}



const App = () => {
  const [state, dispatch] = React.useReducer<React.Reducer<IState, IAction>>(reducer, initialState);
  const [taskText, setTaskText] = React.useState("");

  return (
    <div>
      <ul>Tasks: {state.allTasks.map(t => <li key={t.text}>{t.text}</li>)}</ul>
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