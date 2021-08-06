import { applyMiddleware, createStore, compose } from 'redux'
import { logger } from 'redux-logger'
import { persistStore } from 'redux-persist'

import rootReducer from './combineReducers'
import * as env from '../helpers/environment'

// Initial State Imports
import { initial_state as initial_form_state } from '../containers/FormContainer/reducer'

const preloaded_state = {
  form: initial_form_state,
}

const middlewares = []

if (env.isDevEnvironment() || env.isLocalEnvironment()) {
  middlewares.push(logger)
}

const store = createStore(
  rootReducer,
  preloaded_state,
  compose(applyMiddleware(...middlewares))
)
persistStore(store)

export default store
