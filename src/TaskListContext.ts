import { createContext } from 'react';
import { IState, Status } from './commonTypes';

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

export const TaskListContext = createContext<IState>(initialState);