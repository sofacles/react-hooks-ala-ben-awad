export enum TaskStatuses {
  NotStarted = "not started",
  InProgress = "in progress",
  Done = "done"
}

export interface iTask {
  description: string,
  id: string,
  status: TaskStatuses,
  title: string
}

export interface iToDoList {
  notStartedList: iTask[],
  inProgressList: iTask[],
  doneList: iTask[]
}