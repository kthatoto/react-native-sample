import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.listItem}>
        <Text>{this.props.label}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    marginHorizontal: 20,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
