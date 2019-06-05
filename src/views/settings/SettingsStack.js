import { createStackNavigator } from 'react-navigation'
import SettingsScreen from './SettingsScreen'
import ProfileScreen from './ProfileScreen'

export default createStackNavigator({
  Settings: { screen: SettingsScreen },
  Profile: { screen: ProfileScreen }
}, {
  defaultNavigationOptions: () => ({
    headerTitle: 'Settings',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'tomato'
    }
  })
})
