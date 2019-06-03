import React from 'react'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { Text, View, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import axios from 'axios'

import ListItem from '../../components/ListItem'
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

  componentWillMount () {
    this.props.navigation.setParams({
      openModal: this.openModal.bind(this)
    })
    ApiClient('get', '/posts', {}).then(response => {
      this.setState({posts: response.data})
    }).catch(error => {
      console.warn(error)
    })
  }

  render() {
    return (
      <View>
        <ScrollView style={styles.home}>
          <FlatList
            data={this.state.posts}
            renderItem={({item}) => <ListItem label={item.body}/>}
            keyExtractor={(item) => item.id.toString()}
          />
        </ScrollView>
        <PostModal closeModal={this.closeModal.bind(this)} modalVisible={this.state.modalVisible}/>
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
