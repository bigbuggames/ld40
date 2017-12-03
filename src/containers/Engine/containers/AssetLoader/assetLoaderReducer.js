import { combineReducers } from 'redux'

import { 
  LOAD_ASSETS_PENDING,
  LOAD_ASSETS_SUCCESS,
  LOAD_ASSETS_ERROR,
  ASSET_LOADED
} from './actionTypes'

const byId = (state = {}, action) => {
  switch (action.type) {
    case ASSET_LOADED:
      return {
        ...state,
        [action.payload.name]: action.payload.blobUrl
      }
    default:
      return state
  }
}

const byType = (state = [], action) => {
  switch (action.type) {
    case ASSET_LOADED:
      return {
        ...state,
        [action.payload.type]: [ 
          ...state[action.payload.type] || [],
          action.payload.name
        ]
      }
    default:
      return state
  }
}

const loaded = (state = [], action) => {
  switch (action.type) {
    case ASSET_LOADED:
      return [...state, action.payload.name]
    default:
      return state
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case LOAD_ASSETS_PENDING:
      return true
    case LOAD_ASSETS_SUCCESS:
      return false
    case LOAD_ASSETS_ERROR:
      return false
    default:
      return state
  }
}

export default combineReducers({
  loading,
  byId,
  byType,
  loaded
})
