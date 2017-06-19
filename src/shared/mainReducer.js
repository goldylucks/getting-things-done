// @flow

import { combineReducers } from 'redux'

import tags from './modules/tags'

const reducers = combineReducers({
  tags: tags.reducer,
})

export default reducers
