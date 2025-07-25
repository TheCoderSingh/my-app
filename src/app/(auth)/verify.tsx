import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Button from '../features/button/Button';
import { Link } from 'expo-router';

const Verify = () => {
  const phoneNumber = useSelector((state: any) => state.currentUserReducer.phoneNumber);
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter]);
  
  return (
    <View>
      <SafeAreaView>
        <StatusBar style="dark" />
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View className="pt-8 px-6">
            <View>
              <Text className="font-heading text-2xl">
                Verify your email or number
              </Text>
              <Text className="font-body text-lg pt-2 leading-8">
                Please enter the verification code sent to: {phoneNumber ?? 'your number'}.
              </Text>
            </View>

            <View className="mt-20 flex-row justify-center items-center gap-6">
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <TextInput
                    key={index}
                    autoFocus={index === 0}
                    keyboardType="numeric"
                    maxLength={1}
                    className="border border-[#1A6D66] rounded-[10px] placeholder:text-[#aaa] w-[40px] h-[40px] text-center"
                  />
                ))}
            </View>
            <View className="mt-5">
              <Link href={'/(auth)/signup'}>
                <Text className="text-[#1A6D66] text-center mb-10 underline">
                  Edit phone number
                </Text>
              </Link>
            </View>

            <View className="mt-20">
              <Button text="Enter" filled className="mb-10" />
            </View>

            <View className="flex items-center mt-20">
              {counter > 0 ? (
                <Text className="text-[#1A6D66] text-xl">
                  Resend in 00:{counter < 10 ? `0${counter}` : counter}
                </Text>
              ) : (
                <Button onPress={() => setCounter(30)} href="/" text="Resend Code" />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
};

export default Verify;
