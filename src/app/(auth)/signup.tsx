import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
  Pressable,
} from 'react-native';
import Button from '../features/button/Button';
import { Link } from 'expo-router';
import SocialIcons from '../features/social-icons/SocialIcons';
import { useSelector } from 'react-redux';

const Signup = () => {
  // Get the auth error from Redux state
  const authError = useSelector(
    (state: any) => state.currentUserReducer.authError
  );

  return (
    <View>
      <SafeAreaView>
        <StatusBar style="dark" />
        <Pressable onPress={() => Keyboard.dismiss()}>
          <View className="pt-8 px-6">
            <View>
              <Text className="font-heading text-3xl">Get Started!</Text>
              <Text className="font-body text-xl pt-2">Create an account</Text>
            </View>

            <View className="my-20">
              <TextInput
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoFocus
                autoComplete="email"
                className="border border-[#1A6D66] w-full p-4 rounded-[10px] placeholder:text-[#aaa]"
              />
            </View>

            <View className="mt-15">
              <Button text="Enter" filled className="mb-10" />

              <View className="flex flex-row justify-center items-center mb-10">
                <View className="w-1/3 border-t border-[#222] mr-3" />
                <Text>OR</Text>
                <View className="w-1/3 border-t border-[#222] ml-3" />
              </View>

              {/* Social icons go below */}
              <SocialIcons />

              <Text className="text-center text-[#666] mb-6">
                Already have an account?{' '}
                <Link href={'/(auth)/login'} className="text-[#1A6D66]">
                  Login
                </Link>
              </Text>

              {/* Show Errors go below */}
              {authError && (
                <View
                  className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
                  role="alert"
                >
                  <Text className="font-bold">Oops!</Text>
                  <Text>{authError}</Text>
                </View>
              )}
            </View>
          </View>
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

export default Signup;
