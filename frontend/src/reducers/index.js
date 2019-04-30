import {combineReducers} from 'redux'
import message from './message_reducer'
import reclam from './reclamation_reducer'
import worker from './worker_reducer'
import user from './user_reducer'
const rootReducer=combineReducers({
message,
reclam,
worker,
user
})

export default rootReducer


