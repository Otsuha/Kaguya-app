import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {KGYReadingPage} from './KGYReadingPage';
import {KGYTabBarItem} from './KGYTabBarItem';
import {KGYLibraryPage} from '../KGYLibrary/KGYLibraryPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const KGYNavigationContainerIndex = () => {
  return (
    <NavigationContainer>
      {/*<Stack.Navigator>*/}
      {/*  <Stack.Screen*/}
      {/*    name="Reading"*/}
      {/*    component={KGYReadingPage}*/}
      {/*    options={{title: '阅读中'}}*/}
      {/*  />*/}
      {/*</Stack.Navigator>*/}
      <Tab.Navigator>
        <Tab.Screen
          name="Reading"
          component={KGYReadingPage}
          options={() => ({
            title: '阅读中',
            tabBarIcon: ({focused, size}) => {
              return createItems('Reading', focused, size);
            },
          })}
        />
        <Tab.Screen
          name="Library"
          component={KGYLibraryPage}
          options={() => ({
            title: '书库',
            tabBarIcon: ({focused, size}) => {
              return createItems('Library', focused, size);
            },
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const createItems = (routeName, focused, size) => {
  let imageSource;
  let imageSourceFocused;
  switch (routeName) {
    case 'Reading':
      imageSource = require('../Resources/reading/reading.png');
      imageSourceFocused = require('../Resources/reading/reading-select.png');
      break;
    case 'Library':
      imageSource = require('../Resources/library/library.png');
      imageSourceFocused = require('../Resources/library/library-select.png');
      break;
  }
  return (
    <KGYTabBarItem
      size={size}
      imageSource={focused === true ? imageSourceFocused : imageSource}
    />
  );
};

export default KGYNavigationContainerIndex;
