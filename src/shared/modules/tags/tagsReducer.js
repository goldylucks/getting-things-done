// @flow

import { handleActions } from 'redux-actions'

const initialState = {
  list: ['easy', 'hard'],
  isLoading: false,
  error: null,
}

const tagsReducer = handleActions({
  foo: (state, action) => ({
    ...state,
    list: state.list.concat(action.payload),
  }),
}, initialState)

export default tagsReducer
