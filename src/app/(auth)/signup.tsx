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

const Signup = () => {
  return (
    <View>
      <SafeAreaView>
        <StatusBar style="dark" />
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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

            <View className="mt-20">
              <Button text="Enter" filled className="mb-10" />

              <View className="flex flex-row justify-center items-center mb-10">
                <View className="w-1/3 border-t border-[#222] mr-3" />
                <Text>OR</Text>
                <View className="w-1/3 border-t border-[#222] ml-3" />
              </View>

              {/* Social icons go below */}
              <View className="flex flex-row justify-center gap-16 mb-14">
                <View>
                  <Text>F</Text>
                </View>
                <View>
                  <Text>L</Text>
                </View>
                <View>
                  <Text>G</Text>
                </View>
                <View>
                  <Text>G</Text>
                </View>
                <View>
                  <Text>A</Text>
                </View>
              </View>

              <Text className="text-center text-[#666] mb-6">
                Already have an account?{' '}
                <Link href={'/(auth)/login'} className="text-[#1A6D66]">
                  Login
                </Link>
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
};

export default Signup;
