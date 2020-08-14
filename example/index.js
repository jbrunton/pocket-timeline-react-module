import { AppRegistry } from 'react-native';
//import App from './src/App';
import { name as appName } from './app.json';
import {WelcomeScreen, TimelinesApp} from 'pocket-timeline-react-module'


AppRegistry.registerComponent('TimelinesApp', () => TimelinesApp);
AppRegistry.registerComponent('WelcomeApp', () => WelcomeScreen);
