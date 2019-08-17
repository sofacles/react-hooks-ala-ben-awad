import * as React from 'react';
import { Task } from "./commonTypes";
import { TaskView } from "./TaskView";
import { TaskListContext } from './TaskListContext';

interface TaskListProps {
  tasks: Task[];
  heading: string;
}
const TaskList = (props: TaskListProps) => {
  let sthFromContext = React.useContext(TaskListContext);
  return  <div className="category-column"> 
    <h2>{ props.heading }</h2>
    <h4>{ JSON.stringify(sthFromContext) }</h4>
    <ul> {props.tasks.map(t => <TaskView text={t.text} status={t.status} key={t.id} />)}</ul>
  </div>;
};

export
{
  TaskList
};