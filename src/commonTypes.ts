export enum Status { 
  NotStarted = "not started", 
  InProgress = "in progress",
  Done = "done"
}

export interface IState {
  allTasks: Task[];
}
export interface Task {
  text: string;
  id: string;
  status: Status;
}

export enum ActionType {
  Add = 'add',
  Edit = 'edit',
};

export  interface IAddAction {
  type: ActionType.Add;
  payload: {
    text: string;
  };
}

export interface IEditAction {
  type: ActionType.Edit;
  payload: {
    id: string;
    newStatus: Status;
  };
}

export type IAction = IAddAction | IEditAction;

export const initialState: IState = {allTasks: [
  {
    text: "hack the mainframe",
    id: "987yuj",
    status: Status.NotStarted
  },
  {
    text: "darn socks",
    id: "37uc",
    status: Status.NotStarted
  },
  {
    text: "pick plums",
    id: "nfhery",
    status: Status.InProgress
  }
]};