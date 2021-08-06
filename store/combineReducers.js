import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Import our reducers here.
import form from '../containers/FormContainer/reducer'
// import global from '../containers/GlobalContainer/reducer';

const form_value_config = {
  key: 'form_values',
  storage,
  blacklist: ['password'],
}

const form_config = {
  key: 'global',
  storage,
  blacklist: ['loading', form_value_config],
}

const rootReducer = combineReducers({
  form: persistReducer(form_config, form),
  // global: persistReducer(globalPersistConfig, global),
})

export default rootReducer
