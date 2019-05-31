import { createStackNavigator } from 'react-navigation';
import ListScreen from './ListScreen';

export default createStackNavigator({
  List: { screen: ListScreen }
}, {
  defaultNavigationOptions: () => ({
    headerTitle: 'List',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'tomato',
    }
  }),
  headerMode: 'none',
})
