import { NativeModules } from 'react-native';

type PocketTimelineReactModuleType = {
  multiply(a: number, b: number): Promise<number>;
};

const { PocketTimelineReactModule } = NativeModules;

export default PocketTimelineReactModule as PocketTimelineReactModuleType;
