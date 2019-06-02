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
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}>
          <TouchableOpacity style={styles.modalOuter} onPress={() => {this.setModalVisible(false)}}>
            <View style={styles.modalInner}>
              <Text>Hello World!!!!</Text>
            </View>
          </TouchableOpacity>
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
  modalOuter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalInner: {
    backgroundColor: 'white',
    width: screenWidth * 0.8,
    height: screenHeight * 0.7,
    padding: 20
  }
})
