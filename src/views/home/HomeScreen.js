import React from 'react'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import {
  Text, View, ScrollView, StyleSheet, FlatList, TouchableOpacity, TextInput
} from 'react-native'
import { Formik } from 'formik'

import PostItem from '../../components/PostItem'
import PostModal from '../../components/PostModal'
import ApiClient from '../../utils/ApiClient'

class HomeScreen extends React.Component {
  state = {
    modalVisible: false,
    posts: []
  }

  openModal () {
    this.setState({ modalVisible: true })
  }
  closeModal () {
    this.setState({ modalVisible: false })
  }
  closeModalWithRefetch () {
    this.setState({ modalVisible: false })
    this.getPosts()
  }

  getPosts () {
    ApiClient('get', '/posts', {}).then(response => {
      this.setState({posts: response.data})
    }).catch(error => {
      console.warn(error)
    })
  }

  componentWillMount () {
    this.props.navigation.setParams({
      openModal: this.openModal.bind(this)
    })
    this.getPosts()
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={styles.home}>
          <FlatList
            data={this.state.posts}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            renderItem={({item}) => <PostItem label={item.body}/>}
          />
        </ScrollView>
        <PostModal
          closeModal={this.closeModal.bind(this)}
          closeModalWithRefetch={this.closeModalWithRefetch.bind(this)}
          modalVisible={this.state.modalVisible}/>
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.state.params.openModal()}>
          <Ionicons name="ios-add" color="white" size={35} style={{marginRight: 10}}/>
        </TouchableOpacity>
      )
    }
  }
}

const mapStateToProps = state => {
  return state
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: 'white'
  }
})

export default connect(mapStateToProps)(HomeScreen)
