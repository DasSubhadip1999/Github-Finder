const githubReducer = (state, action) => {
    //here taking out the state as state and dispact as action

    switch (action.type) {
        case "GET_USERS" :
            return {
                ...state,
                users : action.payload,
                loading : false,
            }
        case "GET_USER" : 
            return {
                ...state,
                user : action.payload
            }
        case "GET_REPOS" :
            return {
                ...state,
                repos : action.payload,
            }
        case "CLEAR_DATA" : 
            return {
                ...state,
                users : []
            }

        default :
            return state
    }

}

export default githubReducer;