import { Text, View } from 'react-native';
import '../../global.css';
import { Redirect } from 'expo-router';
import React from 'react';

export default function Index() {
  return (
    <React.Fragment>
      <Redirect href={'/(tabs)/home'} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text className="text-red-900">
          Edit app/index.tsx to edit this screen.
        </Text>
      </View>
    </React.Fragment>
  );
}
