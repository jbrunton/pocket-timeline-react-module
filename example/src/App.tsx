import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PocketTimelineReactModule from 'pocket-timeline-react-module';
import { getTimelines } from 'pocket-timeline-react-module';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [timelines, setTimelines] = React.useState<string | undefined>();

  React.useEffect(() => {
    PocketTimelineReactModule.multiply(3, 7).then(setResult);
    getTimelines().then(timelines => {
      setTimelines(timelines.map(timeline => timeline.title).join("\n"))
    })
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text>{timelines}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
