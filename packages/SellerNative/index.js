/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { LogBox } from "react-native";
import i18n from '@SilalApp/common/languages/i18n'
import 'react-native-gesture-handler';

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
AppRegistry.registerComponent(appName, () => App);
