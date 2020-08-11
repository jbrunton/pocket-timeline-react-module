import * as React from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList } from 'react-native';
import { getTimelines } from '../api'
import type {Timeline} from '../models'
import { styles } from "../../ui/styles";

export function TimelinesScreen() {
  const [timelines, setTimelines] = React.useState<Array<Timeline>>();

  React.useEffect(() => {
    getTimelines().then(timelines => {
      setTimelines(timelines)
    })
  }, []);

  return <SafeAreaView>            
    <FlatList
      style={styles.body}
      data={timelines}
      keyExtractor={({ id }, index) => id?.toString()}
      renderItem={({ item }) => (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{item.title}</Text>
          <Text style={styles.sectionDescription}>
            {item.description}
          </Text>
        </View>
      )}
    />
  </SafeAreaView>;
}
