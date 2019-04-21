import { meetUpState } from '../types';
import * as TYEPS from './constants';

export const addTask = (task:meetUpState) => ({
    type: TYEPS.ADD_TASK,
    payload: task
});

export const clearTask = () => ({
    type: TYEPS.REMOVE_TASK
});

