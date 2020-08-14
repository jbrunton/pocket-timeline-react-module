import { NativeModules } from 'react-native';
//import { getTimelines } from './timelines/api';

type PocketTimelineReactModuleType = {
  multiply(a: number, b: number): Promise<number>;
};

const { PocketTimelineReactModule } = NativeModules;

export default PocketTimelineReactModule as PocketTimelineReactModuleType;

//getTimelines().then(console.log)

//export { getTimelines } from './timelines/api'

export { hello } from './test'

export { Timeline, Event } from './timelines/models'
export { getTimelines } from './timelines/api'
export { TimelinesScreen } from './timelines/screens/timelines'
export { WelcomeScreen } from './timelines/screens/welcome'
export { TimelinesApp } from './timelines/screens/timelines-app'
