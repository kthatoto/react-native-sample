import React from 'react'
import { connect } from 'react-redux'
import { Button, Text, View } from 'react-native'
import { addEvent } from '../../redux/actions'

class SettingsScreen extends React.Component {
  callAddEvent () {
    this.props.dispatch(addEvent(`event#${Math.floor(Math.random() * 100)}`))
  }

  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button title="Add event" onPress={this.callAddEvent.bind(this)}/>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
