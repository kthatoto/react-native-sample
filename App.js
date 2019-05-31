import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ListStack from './stacks/list/ListStack';
import SettingsStack from './stacks/settings/SettingsStack';

const AppContainer = createAppContainer(createBottomTabNavigator(
  {
    List: { screen: ListStack },
    Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        const iconName = {
          List: 'ios-list',
          Settings: 'ios-options',
        }[routeName];
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
));

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
