import { combineReducers } from 'redux'

import shop from '../containers/Shop/shopReducers'
import answer from '../containers/Translator/translatorReducers'

export default combineReducers({
  shop,
  answer
})
