const Reducer = (state,action) => {
    switch (action.type) {
        case 'TASK':
            return state =action.payload
                
        default:
            return state
    }
}
export default Reducer