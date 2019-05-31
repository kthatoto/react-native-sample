import React from 'react'
import { Text, View, ScrollView, FlatList, StyleSheet } from 'react-native'
import ListItem from '../../components/ListItem'

export default class ListScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.list}>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => (
            <ListItem label={item.key}/>
          )}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white'
  }
})
