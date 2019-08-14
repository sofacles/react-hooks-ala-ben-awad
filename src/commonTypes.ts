export enum Status { "not started", "in progress", "done"}

export interface Task {
  text: string;
  id: string;
  status: Status;
}
