import React from 'react';
import {
  Button, Text, View, ScrollView, FlatList,
  StyleSheet,
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ListItem from './ListItem';
import Menu from '../../components/Menu';

class ListScreen extends React.Component {
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
    );
  }
}

const ListScreenNavigator = createStackNavigator({
  List: ListScreen,
}, {
  defaultNavigationOptions: () => ({
    headerTitle: 'List',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'tomato',
    }
  }),
});

const ListScreenContainer = createAppContainer(ListScreenNavigator);

export default class List extends React.Component {
  render() {
    const menu = <Menu/>;
    return (
      <SideMenu menu={menu}>
        <ListScreenContainer/>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
  },
});
