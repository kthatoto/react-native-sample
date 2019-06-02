import React from 'react'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'

export default createStackNavigator({
  Home: { screen: HomeScreen }
}, {
  defaultNavigationOptions: () => ({
    headerTitle: 'Home',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'tomato'
    }
  })
})
