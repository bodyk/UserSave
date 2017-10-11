export default function usersReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_NEW_USER':
            return state.concat(action.payload.user);
        case 'UPDATE_USER':
            break;
        case 'DELETE_USER':
            break;
        default:
            break;
    }
    return state;
}