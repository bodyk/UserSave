const middleware = store => next => action => {
    if (action.then) {
        console.log('Its promise');
    }
    return next(action);
}

export default middleware;