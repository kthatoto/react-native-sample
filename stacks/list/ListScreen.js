import React from 'react';
import {
  Button, Text, View, ScrollView, FlatList,
  StyleSheet,
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import { createStackNavigator } from 'react-navigation';

class ListItem extends React.Component {
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

class Menu extends React.Component {
  render() {
    return (
      <View style={styles.menu}>
        <Text>Menu</Text>
      </View>
    );
  }
}

class ListScreen extends React.Component {
  render() {
    const menu = <Menu/>;
    return (
      <SideMenu menu={menu}>
        <ScrollView style={styles.list}>
          <FlatList
            data={[{key: 'a'}, {key: 'b'}]}
            renderItem={({item}) => (
              <ListItem label={item.key}/>
            )}
          />
        </ScrollView>
      </SideMenu>
    );
  }
}

const ListScreenStack = createStackNavigator({
  List: ListScreen,
}, {
  headerMode: 'none'
})

export default ListScreenStack

// export default class List extends React.Component {
//   render() {
//     const menu = <Menu/>;
//     return (
//       <SideMenu menu={menu}>
//         <ListScreenStack/>
//       </SideMenu>
//     );
//   }
// }

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
  },
  listItem: {
    marginHorizontal: 20,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menu: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
