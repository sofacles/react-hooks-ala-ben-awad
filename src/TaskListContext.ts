import { createContext } from 'react';
import { initialState, IAction } from './commonTypes';


export const stateContext = createContext(initialState);
export const dispatchCtx = createContext((() => 0) as React.Dispatch<IAction>);