/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { LogBox } from "react-native";

import 'react-native-gesture-handler';
import i18n from '@SilalApp/common/languages/i18n'

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
AppRegistry.registerComponent(appName, () => App);
