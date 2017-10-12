import * as types from '../models/actionTypes';

export default function usersReducer(state = [], action) {

    switch (action.type) {
        case types.GET_USERS_RECEIVE:
            return {
                ...state,
                payload: state.concat(action.payload)
            };
        case types.POST_USER_RECEIVE:
            console.log(action.payload);
            return state;
        case types.PUT_USER_RECEIVE:
            console.log(action.payload);
            return state;
        case types.DELETE_USER_RECEIVE:
            console.log(state);
            console.log(action.payload);
            return state;
        default:
            break;
    }
    return state;
}