import * as types from '../models/actionTypes';

export default function usersReducer(state = {
    users: [],
    userToPut: {},
    error: null
}, action) {

    switch (action.type) {
        case types.GET_USERS_RECEIVE:
            return {
                ...state,
                users: action.payload
            };
        case types.POST_USER_RECEIVE:
            return state;
        case types.PUT_USER_RECEIVE:
            return state;
        case types.DELETE_USER_RECEIVE:
            return state;
        default:
            break;
    }
    return state;
}