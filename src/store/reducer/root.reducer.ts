import { combineReducers } from 'redux'

import { persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import { authReducer } from '@/store/slices'

const commonConfig = {
  storage
}

const historyConfig = {
  ...commonConfig,
  key: 'authData',
  whitelist: ['isLoggedIn']
}

const rootReducer = combineReducers({
  auth: persistReducer(historyConfig, authReducer)
})

export default rootReducer
