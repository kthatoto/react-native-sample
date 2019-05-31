import { createStackNavigator } from 'react-navigation';
import ListScreen from './ListScreen';

export default createStackNavigator({
  List: { screen: ListScreen }
}, {
  headerMode: 'none',
})
