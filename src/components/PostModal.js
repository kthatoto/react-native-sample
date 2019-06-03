import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Button, Dimensions, StyleSheet, TextInput } from 'react-native'
import Modal from 'react-native-modal'
import { Formik, Form } from 'formik'

class PostModal extends React.Component {
  render () {
    return (
      <Modal isVisible={this.props.modalVisible}
        onBackdropPress={() => this.props.closeModal()}>
        <View style={styles.modal}>
          <Formik initialValues={{ body: '' }}
            render={props => (
              <Form>
                <TextInput name="body" value={props.values.body}/>
              </Form>
            )}
          />
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
