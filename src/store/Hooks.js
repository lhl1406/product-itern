import { useContext } from 'react';
import Context from './Context';
export const useStore = () => {
    const [state, dispatch, stateTask, dispatchTask] = useContext(Context);
    return [state, dispatch, stateTask, dispatchTask];
};
