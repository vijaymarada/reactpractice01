const ReducerForm = (state = { responsedata:{},message:'' }, action) => {
    if (action.type === 'FORM_SUBMIT') {
        return Object.assign({}, state, { message:'LOADING' })
    }
    else
        if (action.type === 'SUBMITTED') {
            console.log(action.responsedata)
            return Object.assign({}, state, { responsedata: action.responsedata,message:'LOADED' })
        }
       
    return state
}
export default ReducerForm