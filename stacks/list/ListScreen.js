import React from 'react';
import { Button, Text, View, ScrollView, FlatList, TouchableHighlight } from 'react-native';

class ListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <TouchableHighlight
      style={{
        marginHorizontal: 20,
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      }}
    >
      <Text>{this.props.label}</Text>
    </TouchableHighlight>
  }
}

export default class ListScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => (
            <ListItem label={item.key}/>
          )}
        />
      </ScrollView>
    );
  }
}
