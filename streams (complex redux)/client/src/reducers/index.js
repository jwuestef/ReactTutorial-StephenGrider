import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import authReducer from './authReducer'
import streamReducer from './streamReducer'



export default combineReducers({
    authFromReducer: authReducer,
    form: formReducer,
    streams: streamReducer
})
