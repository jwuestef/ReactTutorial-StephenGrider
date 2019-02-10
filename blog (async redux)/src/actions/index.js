import jsonPlaceHolder from '../apis/jsonPlaceholder'

// MEMOIZE OPTION
// ALSO non-MEMOIZE OPTION
import _ from 'lodash'



// export const fetchPosts = () => {

//     // Redux-Thunk allows us to return a function - even an async function, instead of a plain JS object
//     return async (dispatch, getState) => {
//         // it takes in dispatch - which will allow us to dispatch any action we want. That's the whole point, we can dispatch another action AFTER a response has been returned
//         // it takes in getState - so it can pull in any information we want
//         const response = await jsonPlaceHolder.get('/posts')

//         // Finally, dispatch an actual action. This fetchPosts() is an action creator... so we still need to dispatch an action in here somewhere
//         dispatch({type: 'FETCH_POSTS', payload: response})
//     }
    

//     // BAD APPROACH - will error out - should use middleware to make async calls! (middleware such as redux-thunk)
//     // const response = await jsonPlaceHolder.get('/posts')

//     // return {
//     //     type: 'FETCH_POSTS',
//     //     payload: response
//     // }

// }



// NOT ACTUALLY CALLING DIRECTLY ANYMORE - CALLING fetchPostsAndUsers() INSTEAD
// CAN BE SIMPLIFIED TO:
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts')
    dispatch({type: 'FETCH_POSTS', payload: response.data})
}
    



// MEMOIZE OPTION

// // export const fetchUser = (userId) => dispatch => {
// //     _fetchUser(userId, dispatch)
// // }

// export const fetchUser = (userId) => dispatch => _fetchUser(userId, dispatch)

// // the _ means private - other developers should not use this outside this file
// const _fetchUser = _.memoize( async (userId, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${userId}`)
//     dispatch({type: 'FETCH_USER', payload: response.data})
// })




// NON-MEMORIZE OPTION

// NOT ACTUALLY CALLING DIRECTLY ANYMORE - CALLING fetchPostsAndUsers() INSTEAD

export const fetchUser = userId => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${userId}`)
    dispatch({type: 'FETCH_USER', payload: response.data})
}



// Now we will only call THIS ONE!
// This one will handle calling the other two action creators
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    console.log('About to fetch posts')
    await dispatch(fetchPosts())
    console.log('fetched posts:')
    console.log(getState().postsFromReducer)

    // const userIds = _.uniq(    _.map(getState().postsFromReducer, 'userId') /* Pull out an array of all the userId's... will be 100 long */   )    // Limit the array to only unique values
    // console.log(userIds)
    // userIds.forEach( eachId => dispatch(fetchUser(eachId)) )   // await is not necessary since we aren't going to do anything after this line - in fact it won't work inside the foreach loop... probably have to do an await Promise.all( --restofline--- ).then() or something like that

    // ^^ can be rewritten as:
    _.chain(getState().postsFromReducer)
        .map('userId')
        .uniq()
        .forEach( eachId => dispatch(fetchUser(eachId)) )
        .value()
}

