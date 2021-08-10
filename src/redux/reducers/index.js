const reducers = (state,action) =>{
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                User: action.payload
            }        
        
        default:
            return{
                state
            }
    }
}

export default reducers