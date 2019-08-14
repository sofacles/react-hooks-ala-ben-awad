import * as React from 'react';
import { Status, Task } from './commonTypes';
import { TaskList } from './TaskList';

enum ActionType {
  Add = 'add',
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

const initialState: IState = {allTasks: [
  {
    text: "hack the mainframe",
    id: "987yuj",
    status: Status["not started"]
  },
  {
    text: "darn socks",
    id: "37uc",
    status: Status["not started"]
  },
  {
    text: "pick tomatoes",
    id: "nfhery",
    status: Status["in progress"]
  }
]};

const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.Add:
      const now = new Date();
      return {allTasks: state.allTasks.concat({
        text: action.payload.text,
        id: now.toISOString(),
        status: Status["not started"]
       })};
    default:
      throw new Error();
  }
}


const App = () => {
  const [state, dispatch] = React.useReducer<React.Reducer<IState, IAction>>(reducer, initialState);
  const [taskText, setTaskText] = React.useState("");

  return (
    <div>
      <TaskList tasks={state.allTasks} />
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