import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {KGYReadingPage} from './KGYReadingPage';

const Stack = createNativeStackNavigator();

const KGYNavigationContainerIndex = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Reading"
          component={KGYReadingPage}
          options={{title: '阅读中'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default KGYNavigationContainerIndex;
