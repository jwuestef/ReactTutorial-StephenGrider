import { combineReducers } from 'redux'

import postsReducer from './postsReducer'
import usersReducer from './usersReducer'



export default combineReducers({
    postsFromReducer: postsReducer,
    usersFromReducer: usersReducer
})
