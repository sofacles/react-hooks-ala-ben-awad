import React from 'react';
import { initialState, IState, Status, Task, ActionType, IAction } from './commonTypes';
import { TaskList } from './TaskList';
import { stateContext, dispatchCtx } from './TaskListContext';
import './App.css';



const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.Add:
      const now = new Date();
      return {allTasks: state.allTasks.concat({
        text: action.payload.text,
        id: now.toISOString(),
        status: Status.NotStarted
       })};

    case ActionType.Edit:
      
     let existingTask = state.allTasks.filter(t => t.id === action.payload.id)[0];
     let newTask: Task = {...existingTask};
     newTask.status = action.payload.newStatus;
     let retVal = {
       allTasks: [ ...state.allTasks]
      .filter(a => a.id !== action.payload.id )
      .concat(newTask)
     };
     
     return retVal;
      
    default:
      throw new Error("Wie koenttest du?");
  }
};


const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [taskText, setTaskText] = React.useState("");

  return (
    <div>
      <div className="broad">
        <dispatchCtx.Provider value={dispatch} >
          <stateContext.Provider value={state}>
            <TaskList heading="not started" status={Status.NotStarted}  />
            <TaskList heading="in progress" status={Status.InProgress}  />
            <TaskList heading="done" status={Status.Done}  />
          </stateContext.Provider>
        </dispatchCtx.Provider>
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
              newStatus: Status.InProgress 
            }});
          }
        }>Move nfhery to in Progress</button>
      </div>
    </div>
  );
};

export default App;