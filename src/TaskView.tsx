import React, {useContext} from 'react';
import { Status, IEditAction, ActionType } from "./commonTypes";
import { dispatchCtx, stateContext } from './TaskListContext';

interface TaskProps {
  text: string;
  status: Status;
  id: string;
}
const TaskView = (props: TaskProps) => {

  const dispatchContext = useContext(dispatchCtx);
  let stateFromContext = React.useContext(stateContext);
  let ourTask = stateFromContext.allTasks.filter(a => a.id === props.id)[0];
  const options: JSX.Element[] = [];
  for(const status in Status){
    options.push(<option 
      value={Status[status]}
      key={Status[status]}>
        {Status[status]}
      </option>);
  }
 
  return <li>{ourTask.text}, {ourTask.status}
    <select onChange={(e) => {
        let accion: IEditAction = {
          type: ActionType.Edit,
          payload : {
            id: ourTask.id,
            newStatus: e.target.value as unknown as Status
          }
        };
        dispatchContext(accion);
      }} value={ourTask.status}
    >
     {options}
    </select>
  </li>;
};

export
{
  TaskView
};