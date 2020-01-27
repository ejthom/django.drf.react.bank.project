const authReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NAME':
            return {
                ...state,
            }
        case 'ADD_DATE':
            return {
                ...state
            }
        default:
            return state
    }
}
export default authReducer