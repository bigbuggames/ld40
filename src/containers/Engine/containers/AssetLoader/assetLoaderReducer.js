import { 
  LOAD_ASSETS_PENDING,
  LOAD_ASSETS_SUCCESS,
  LOAD_ASSETS_ERROR
} from './actionTypes'

const initialState = {
  isLoadingAssets: true
}

export default (state = initialState, action) => {
  switch (action.type) {

    case LOAD_ASSETS_PENDING:
      return {
        ...state,
        isLoadingAssets: true
      }

    case LOAD_ASSETS_SUCCESS:
      return {
        ...state,
        isLoadingAssets: false
      }

    case LOAD_ASSETS_ERROR:
      return {
        ...state,
        isLoadingAssets: true
      }

    default:
      return state
  }
}
