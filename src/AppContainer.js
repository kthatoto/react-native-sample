import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import SideMenu from 'react-native-side-menu';
import Menu from './components/Menu'

import ListStack from './views/list/ListStack'
import SettingsStack from './views/settings/SettingsStack'

const AppContainer = createAppContainer(createBottomTabNavigator(
  {
    List: { screen: ListStack },
    Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        const iconName = {
          List: 'ios-list',
          Settings: 'ios-options'
        }[routeName]
        return <Ionicons name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
))

export default class App extends React.Component {
  render() {
    const menu = <Menu/>
    return (
      <SideMenu menu={menu}>
        <AppContainer/>
      </SideMenu>
    )
  }
}
