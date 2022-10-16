import {applyMiddleware,configureStore} from '@reduxjs/toolkit'
import appReducer from './reducers'
import thunk from 'redux-thunk'

const middlewares = [thunk]

const store = configureStore({
    reducer:{
       data:appReducer,
    }
  })

export default store