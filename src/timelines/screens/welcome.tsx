import React from 'react';
import { Text, View } from 'react-native';

export const WelcomeScreen = () => {
  return  <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
    <Text style={{textAlignVertical: "center",textAlign: "center",}}>Hello, World!</Text>
  </View>;
}
