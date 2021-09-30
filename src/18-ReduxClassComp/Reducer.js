const Reducer = (state = { counter: 0, data: {}, todoId: '' }, action) => {
    if (action.type === 'INCREMENT') {
        return Object.assign({}, state, { counter: state.counter + 1 })
    }
    if (action.type === 'DECREMENT') {
        return Object.assign({}, state, { counter: state.counter - 1 })
    }
    if (action.type === 'FETCH_TODO_ID') {
        return Object.assign({}, state, { todoId: action.todoId })
    }
    if (action.type === 'TODO_ID_FETCHED') {
        return Object.assign({}, state, { data: action.data })
    }

    if (action.type === 'FETCH_TODOS_ALL') {
        return Object.assign({}, state, { todoId: -1 })
    }
    if (action.type === 'TODO_ALL_FETCHED') {
        return Object.assign({}, state, { data: action.data })
    }
    return state
}
export default Reducer