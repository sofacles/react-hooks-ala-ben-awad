import * as React from 'react';
import { Task } from "./commonTypes";
import { TaskView } from "./TaskView";

interface TaskListProps {
  tasks: Task[];
}
const TaskList = (props: TaskListProps) => {
  return  <div>
    <ul>Tasks: {props.tasks.map(t => <TaskView text={t.text} status={t.status} key={t.id} />)}</ul>
  </div>;
};

export
{
  TaskList
};