import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity style={styles.listItem}>
        <Text>{this.props.label}</Text>
      </TouchableOpacity>
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
