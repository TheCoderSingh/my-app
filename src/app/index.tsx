import { SafeAreaView, Text, View } from 'react-native';
import '../../global.css';
import { Redirect } from 'expo-router';
import React from 'react';
import Button from './features/button/Button';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  return (
    <React.Fragment>
      <SafeAreaView>
        <StatusBar style="dark" />
        <View className="pt-8 px-6 flex justify-between h-full">
          <View>
            <Text className="font-heading text-2xl">Wizdom</Text>
            <Text className="font-heading text-2xl">
              Lorem ipsum dolor tagline
            </Text>
          </View>

          <View className="h-[365px] bg-gray-400 rounded-[20px] mb-4">
            {/*@TODO: Image slider goes here */}
          </View>

          <View>
            <Button
              text="Create an account"
              filled
              href={'/(auth)/signup'}
              className="mb-6"
            />
            <Button text="Login" href={'/(auth)/login'} />
          </View>
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
}
