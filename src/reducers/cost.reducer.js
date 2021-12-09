import { SET_CURRENT_USER } from '../actions/actionTypes';

const initialState = {
    currentUser: {},
};

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_CURRENT_USER:
            return { ...state, currentUser: action.payload.currentUser };
            break;
    }

    return state;
};