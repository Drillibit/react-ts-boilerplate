import { meetUpState, actionType } from '../types';
import * as TYPES from '../actions/constants';


const meetUpDefaultState: meetUpState = {
    time: Date.now().toLocaleString(),
    totalCost: 0,
    description: '',
    place: {
        address: '',
        price: 0
    },
    ownerId: 0,
};

export const meetUpReducer = (state = meetUpDefaultState, action:actionType) => {
    switch(action.type) {
        case (TYPES.ADD_TASK):
            return {
                ...state,
                
            };
    }
};