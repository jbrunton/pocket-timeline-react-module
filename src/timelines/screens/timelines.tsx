import * as React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableWithoutFeedback } from 'react-native';
import { getTimelines } from '../api'
import type {Timeline} from '../models'
import { styles } from "../../ui/styles";

export function TimelinesScreen({ navigation }) {
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
      keyExtractor={({ id }) => id?.toString()}
      renderItem={({ item }) => (
        <TouchableWithoutFeedback onPress={() =>
          //console.log('touched')
          navigation.navigate('Timeline', { timelineId: item.id })
        }>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            <Text style={styles.sectionDescription}>
              {item.description}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    />
  </SafeAreaView>;
}
