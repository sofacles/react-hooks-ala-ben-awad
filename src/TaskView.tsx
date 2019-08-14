import * as React from 'react';
import { Status } from "./commonTypes";

interface TaskProps {
  text: string;
  status: Status;
}
const TaskView = (props: TaskProps) => {
  return <li>{props.text}, {Status[props.status]}</li>;
};

export
{
  TaskView
};