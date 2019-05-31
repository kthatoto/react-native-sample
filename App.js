import React from 'react'
import { Provider } from 'react-redux'
import AppContainer from './src/AppContainer'
import store from './src/redux/store'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store()}>
        <AppContainer />
      </Provider>
    )
  }
}
