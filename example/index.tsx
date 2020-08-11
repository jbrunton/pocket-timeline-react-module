import { AppRegistry } from 'react-native';
//import App from './src/App';
import { name as appName } from './app.json';
import {TimelinesScreen, WelcomeScreen} from 'pocket-timeline-react-module'


AppRegistry.registerComponent(appName, () => WelcomeScreen);
