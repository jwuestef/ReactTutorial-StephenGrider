
export default (state = [], action) => {
    // if (action.type === 'FETCH_POSTS') {
    //     return action.payload
    // }
    // return state

    // Switch statements are commonly used
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload
        default:
            return state
    }

}
