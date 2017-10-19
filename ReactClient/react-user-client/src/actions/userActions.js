import {
    CALL_API
} from 'redux-api-middleware';

import * as types from '../models/actionTypes';

const BASE_URL = 'http://localhost:52818/api/Users/';

export function getAllUsers() {
    return {
        [CALL_API]: {
            endpoint: BASE_URL,
            method: 'GET',
            types: [types.GET_USERS_REQUEST, types.GET_USERS_RECEIVE, types.GET_USERS_FAILURE]
        }
    }
}

export function deleteUser(id) {
    return {
        [CALL_API]: {
            endpoint: BASE_URL + id,
            method: 'DELETE',
            types: [types.DELETE_USER_REQUEST, types.DELETE_USER_RECEIVE, types.DELETE_USER_FAILURE]
        }
    }
}

export function addUser(user) {
    console.log(user);
    return {
        [CALL_API]: {
            endpoint: BASE_URL + user.id,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            types: [types.POST_USER_REQUEST, types.POST_USER_RECEIVE, types.POST_USER_FAILURE],
            body: JSON.stringify(user)
        }
    }
}

export function putUser(user, id) {
    return {
        [CALL_API]: {
            endpoint: BASE_URL + id,
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },            
            types: [types.PUT_USER_REQUEST, types.PUT_USER_RECEIVE, types.PUT_USER_FAILURE],
            body: JSON.stringify(user)
        }
    }
}