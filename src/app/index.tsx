import { SafeAreaView, Text, View } from 'react-native';
import '../../global.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from 'react-redux';
import { setUserData } from './features/users/CurrentUserSlice'; // <-- adjust this path!
import React from 'react';
import Button from './features/button/Button';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const userData = await SecureStore.getItemAsync('user');

        if (userData) {
          const parsedUser = JSON.parse(userData);

          dispatch(setUserData(parsedUser));
          router.replace('/profile');
        }
      } catch (err) {
        console.error('Error loading session:', err);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  if (loading) return null;

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
