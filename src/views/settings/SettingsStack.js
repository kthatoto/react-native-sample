import { createStackNavigator } from 'react-navigation'
import SettingsScreen from './SettingsScreen'

export default createStackNavigator({
  Settings: { screen: SettingsScreen }
}, {
  defaultNavigationOptions: () => ({
    headerTitle: 'Settings',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'tomato'
    }
  })
})
