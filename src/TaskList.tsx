import * as React from 'react';
import { Task } from "./commonTypes";
import { TaskView } from "./TaskView";

interface TaskListProps {
  tasks: Task[];
  heading: string;
}
const TaskList = (props: TaskListProps) => {
  return  <div className="category-column"> 
    <h2>{ props.heading }</h2>
    <ul> {props.tasks.map(t => <TaskView text={t.text} status={t.status} key={t.id} />)}</ul>
  </div>;
};

export
{
  TaskList
};