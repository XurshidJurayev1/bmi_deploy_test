import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {userSingle, addNews} from './adminRed'
import {register, token, user, role} from './userRed'



const rootReducer = combineReducers({
  userSingle, addNews,
  register, token, user, role,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))