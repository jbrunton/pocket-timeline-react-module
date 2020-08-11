import { AppRegistry } from 'react-native';
//import App from './src/App';
import { name as appName } from './app.json';
import {TimelinesScreen} from 'pocket-timeline-react-module'


AppRegistry.registerComponent(appName, () => TimelinesScreen);
