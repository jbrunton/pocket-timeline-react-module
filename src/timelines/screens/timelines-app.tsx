import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TimelinesScreen } from './timelines';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();

export function TimelinesApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Timelines" screenOptions={({ route, navigation }) => ({
        headerShown: false
      })}>
        <Stack.Screen name="Timelines" component={TimelinesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import React from 'react';
// import { Text, View } from 'react-native';

// export const NavScreen = () => {
//   return  <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
//     <Text style={{textAlignVertical: "center",textAlign: "center",}}>Hello, World!</Text>
//   </View>;
// }
