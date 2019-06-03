import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import {
  Text, TouchableHighlight, View, Alert, StyleSheet, Dimensions, TouchableOpacity, Button
} from 'react-native'
import Modal from 'react-native-modal'

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.state.params.setModalVisible(true)}>
          <Ionicons name="ios-add" color="white" size={35} style={{marginRight: 10}}/>
        </TouchableOpacity>
      )
    }
  }

  state = {
    modalVisible: false
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  }

  componentWillMount () {
    this.props.navigation.setParams({
      setModalVisible: this.setModalVisible.bind(this)
    })
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <Modal isVisible={this.state.modalVisible}>
          <View style={styles.modal}>
            <Text>hey</Text>
            <Button onPress={() => this.setModalVisible(false)} title="Close Modal"/>
          </View>
        </Modal>

        <Button
          onPress={() => {
            this.setModalVisible(true);
          }}
          title="Show Modal"
        />
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

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20
  }
})
