import React from 'react'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { Text, View, ScrollView, StyleSheet, FlatList } from 'react-native'
import ListItem from '../../components/ListItem'

class HomeScreen extends React.Component {
  state = {
    messages: [
      {id: 1, content: 'message1'},
      {id: 2, content: 'message2'}
    ]
  }

  render() {
    return (
      <ScrollView style={styles.home}>
        <FlatList
          data={this.state.messages}
          renderItem={({item}) => <ListItem label={item.content}/>}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    )
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
