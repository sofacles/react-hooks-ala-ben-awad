import * as React from 'react';
import { Status } from "./commonTypes";
import { TaskView } from "./TaskView";
import { stateContext } from './TaskListContext';

interface TaskListProps {
 status?: Status
  heading: string;
}
const TaskList = (props: TaskListProps) => {
  let sthFromContext = React.useContext(stateContext);
  let tasks = sthFromContext.allTasks.filter(t => t.status === props.status);

  return  <div className="category-column"> 
    <h2>{ props.heading }</h2>
    <h4>{ JSON.stringify(sthFromContext) }</h4>
    <ul> {tasks.map(t => 
      <TaskView text={t.text} status={t.status} id={t.id} key={t.id} />)}
    </ul>
  </div>;
};

export
{
  TaskList
};