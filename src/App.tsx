import React, { useState } from 'react';
import { iTask, TaskStatuses, iToDoList } from "./commonTypes";

function App() {
  // I'm trying to do my redux homework with react hooks, and I just watched Ben's video about useReducer.  This is a very naieve POC using useState
  // and it doesn't really have the features requested by the TODO app: Having 3 lists, separated by status and being able to toggle each TODO's status from a little menu
  // So, I'm going to check in this crap and then try to use useReducer

  const generateDefaultList = () : iToDoList => {
    let dummies: iTask[] = [{
      id: "121",
      title: "change lightbulb out back",
      description: "May need a ladder",
      status: TaskStatuses.NotStarted
    },
    {
      id: "122",
      title: "paint shelf brackets",
      description: "where is that paint",
      status: TaskStatuses.NotStarted
    },
    {
      id: "123",
      title: "Pick tomatoes",
      description: "We have a lot",
      status: TaskStatuses.InProgress
    }
  ];

  let retVal : iToDoList = {
    notStartedList: dummies.filter(t => t.status === TaskStatuses.NotStarted),
    inProgressList: dummies.filter(t => t.status === TaskStatuses.InProgress),
    doneList: dummies.filter(t => t.status === TaskStatuses.Done),
    };

    return retVal;
  }

  const listFrom = () => {
    let inProg = taskList.inProgressList.map(a => <li>{a.title}</li>);
    return inProg;
  };

   let [taskList, setTaskList] = useState(generateDefaultList());

   const test = () => {
    let newState = Object.assign({}, taskList);
    let taskToMove = taskList.notStartedList.filter(a => a.id === "122")[0];
    let newNotStarted = taskList.notStartedList.filter(a => a.id !== "122");
    taskToMove.status = TaskStatuses.InProgress;
    newState.inProgressList.push(taskToMove);
    newState.notStartedList = newNotStarted;
    setTaskList(newState);
  };

  debugger;

  return (
    <div className="App">
      Not started
       <ul>
        {
          taskList.notStartedList.map(a => <li>{a.title}</li>)
        }
      </ul>
      In progress
      <ul>
        {listFrom()}
      </ul>
      Done
      <ul>
        {
          taskList.doneList.map(a => <li>{a.title}</li>)
        }
      </ul>
      <button onClick={test}>Move one to done</button>
    </div>
  );
}

export default App;