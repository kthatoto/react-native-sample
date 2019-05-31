import React from 'react'
import { connect } from 'react-redux'
import { Text, View, ScrollView, FlatList, StyleSheet } from 'react-native'
import ListItem from '../../components/ListItem'

class ListScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.list}>
        <FlatList
          data={this.props.events}
          renderItem={({item}) => (
            <ListItem label={item.key}/>
          )}
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
  }
})

export default connect(mapStateToProps)(ListScreen)
