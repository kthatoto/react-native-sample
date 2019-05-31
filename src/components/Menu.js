import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Menu extends React.Component {
  render() {
    return (
      <View style={styles.menu}>
        <Text>Menu</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
