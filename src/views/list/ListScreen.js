import React from 'react'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { Text, View, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import ListItem from '../../components/ListItem'
import { openMenu } from '../../redux/actions'

class ListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    // console.log(navigation.getParam('asdf'))
    return {
      headerLeft: (
        <TouchableOpacity>
          <Ionicons name="ios-menu" size={30} color="white" style={styles.headerLeft} />
        </TouchableOpacity>
      )
    }
  }

  render() {
    // this.props.navigation.setParams({asdf: 123})
    const r = Math.floor(Math.random() * 100)
    return (
      <ScrollView style={styles.list}>
        <Text>{r}</Text>
        <Text>{this.props.opening.toString()}</Text>
        <FlatList
          data={this.props.events}
          renderItem={({item}) => <ListItem label={item}/>}
          keyExtractor={(_, index) => index.toString()}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white'
  },
  headerLeft: {
    marginLeft: 10
  }
})

export default connect(mapStateToProps)(ListScreen)
