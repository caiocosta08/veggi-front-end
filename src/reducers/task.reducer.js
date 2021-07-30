const initialState = {
    currentTask: {},
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_CURRENT_TASK':
            return { ...state, currentTask: action.payload.currentTask };
            break;
    }

    return state;
};