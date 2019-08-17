import * as React from 'react';
import { Status, Task } from './commonTypes';
import { TaskList } from './TaskList';
import './App.css';


enum ActionType {
  Add = 'add',
  Edit = 'edit',
}


interface IState {
  allTasks: Task[];
}

interface IAddAction {
  type: ActionType.Add;
  payload: {
    text: string;
  };
}

interface IEditAction {
  type: ActionType.Edit;
  payload: {
    id: string;
    newStatus: Status;
  };
}



type IAction = IAddAction | IEditAction;

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
    status: Status["not started"]
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

    case ActionType.Edit:
     let existingTask = state.allTasks.filter(t => t.id === action.payload.id)[0];
     let newTask: Task = Object.create(existingTask);
     newTask.status = action.payload.newStatus;
      return {allTasks: [ ...state.allTasks]
      .filter(a => a.id !== action.payload.id )
      .concat(newTask)
    };
      
    default:
      throw new Error("Wie koenttest du?");
  }
}


const App = () => {
  const [state, dispatch] = React.useReducer<React.Reducer<IState, IAction>>(reducer, initialState);
  const [taskText, setTaskText] = React.useState("");

  return (
    <div>
      <div className="broad">
        <TaskList heading="not started" tasks={state.allTasks.filter(t => t.status === Status["not started"])} />
        <TaskList heading="in progress" tasks={state.allTasks.filter(t => t.status === Status["in progress"])} />
      </div>

      <div>
        <input value={taskText} onChange={(e) => {
          setTaskText(e.target.value);
        }} />
         <button onClick={
          () => {
            dispatch({type: ActionType.Add, payload: { text: taskText } });
          }
        }>Add task</button>
         <button onClick={
          () => {
            dispatch({type: ActionType.Edit, payload: { 
              id: "nfhery",
              newStatus: Status["in progress"] 
            }});
          }
        }>Move nfhery to in Progress</button>
      </div>
    </div>
  );
};

export default App;