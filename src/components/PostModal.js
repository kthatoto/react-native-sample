import React from 'react'
import { connect } from 'react-redux'
import { Alert, Text, View, Button, Dimensions, StyleSheet, TextInput, InputAccessoryView } from 'react-native'
import Modal from 'react-native-modal'
import { Formik } from 'formik'

class PostModal extends React.Component {
  sendPost () {
    console.log('posted1!1')
    Alert.alert('送信！')
  }

  render () {
    const inputAccessoryViewID = "postmodal-textarea"
    return (
      <Modal isVisible={this.props.modalVisible}
        onBackdropPress={() => this.props.closeModal()}>
        <View style={styles.modal}>
          <Formik initialValues={{ body: '' }}>
            {props => (
              <View>
                <View styles={styles.textareaWrapper}>
                  <TextInput style={styles.textarea} multiline={true}
                    onChangeText={props.handleChange('body')}
                    onBlur={props.handleBlur('body')}
                    value={props.values.body}
                    inputAccessoryViewID={inputAccessoryViewID}
                  />
                  <Text style={styles.textareaCount}>{props.values.body.length}/140</Text>
                  <InputAccessoryView nativeID={inputAccessoryViewID}>
                    <Button onPress={() => Alert.alert('完了！')} title="完了"/>
                  </InputAccessoryView>
                </View>
                <Button title="送信" onPress={() => this.sendPost.bind(this)}/>
              </View>
            )}
          </Formik>
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
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10
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
  },
  accessory: {
    height: 30,
    backgroundColor: 'red'
  }
})
