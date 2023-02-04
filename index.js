/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import KGYNavigationContainerIndex from './KGYRoot/KGYNavigationContainerIndex';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => KGYNavigationContainerIndex);
