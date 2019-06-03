import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Button, Dimensions, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'

class PostModal extends React.Component {
  render () {
    return (
      <Modal isVisible={this.props.modalVisible}
        onBackdropPress={() => this.props.closeModal()}>
        <View style={styles.modal}>
          <Text>hey</Text>
          <Button onPress={() => this.props.closeModal()} title="Close Modal"/>
        </View>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20
  }
})
