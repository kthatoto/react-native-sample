import React from 'react'
import { connect } from 'react-redux'
import { Alert, Text, View, Button, Dimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { Formik } from 'formik'

import ApiClient from '../utils/ApiClient'

class PostModal extends React.Component {
  sendPost (values) {
    ApiClient('post', '/posts', values).then(response => {
      this.props.closeModalWithRefetch()
    }).catch(_ => {
      Alert.alert('送信できませんでした')
    })
  }

  render () {
    return (
      <Modal isVisible={this.props.modalVisible}
        onBackdropPress={() => this.props.closeModal()}
        style={styles.modalWrapper}>
        <View style={styles.modal}>
          <Formik initialValues={{ body: '' }} onSubmit={values => this.sendPost(values)}>
            {props => (
              <View>
                <View styles={styles.textareaWrapper}>
                  <TextInput style={styles.textarea} multiline={true}
                    onChangeText={props.handleChange('body')}
                    onBlur={props.handleBlur('body')}
                    value={props.values.body}
                  />
                  <Text style={styles.textareaCount}>{props.values.body.length}/140</Text>
                </View>
                <View style={styles.buttons}>
                  <TouchableOpacity onPress={this.props.closeModal} style={styles.cancelButton}>
                    <Text style={[styles.buttonText, {color: 'gray'}]}>キャンセル</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={props.handleSubmit} style={styles.submitButton}>
                    <Text style={[styles.buttonText, {color: 'white'}]}>送信</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
        <KeyboardSpacer style={styles.keyboardSpacer} topSpacing={-130}/>
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
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 40
  },
  cancelButton: {
    height: 35,
    width: 140,
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20
  },
  submitButton: {
    height: 35,
    width: 140,
    backgroundColor: 'tomato',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 9
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  textarea: {
    height: 150,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5
  },
  textareaWrapper: {
    position: 'relative'
  },
  textareaCount: {
    position: 'absolute',
    bottom: 5,
    right: 5
  }
})
