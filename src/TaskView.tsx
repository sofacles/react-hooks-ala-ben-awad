import React, {useContext} from 'react';
import { Status, IEditAction, ActionType } from "./commonTypes";
import { dispatchCtx } from './TaskListContext';

interface TaskProps {
  text: string;
  status: Status;
  id: string;
}
const TaskView = (props: TaskProps) => {

  const dispatchContext = useContext(dispatchCtx);
 
  return <li>{props.text}, props.status}
    <select onChange={(e) => {
      console.log("how do I loop through an enum?");
      let accion: IEditAction = {
        type: ActionType.Edit,
        payload : {
          id: props.id,
          newStatus: e.target.value as unknown as Status
        }
      };
      debugger;
      dispatchContext(accion);
    }}>
      <option 
        value="not started" 
        key={Status.NotStarted}
      >
        not started
      </option>
      <option 
        value="in progress" 
        key={Status.InProgress}
      >
        in progress
      </option>
      <option 
        value="done"
        key={Status.Done}
      >
        done
      </option>
    </select>
  </li>;
};

export
{
  TaskView
};