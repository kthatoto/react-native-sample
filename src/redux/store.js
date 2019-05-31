import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'

import reducer from './reducer'

export default createStoreWithMiddleware = () => {
  const store = applyMiddleware(
    // thunkMiddleware
  )(createStore)
  return store(reducer)
}
