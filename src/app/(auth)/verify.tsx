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
                Please enter the verification code sent to: emailtest@gmail.com
                or +234 810 123 4567
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
              <Link href={'/'}>
                <Text className="text-[#1A6D66] text-center mb-10 underline">
                  Edit email or number
                </Text>
              </Link>
            </View>

            <View className="mt-20">
              <Button text="Enter" filled className="mb-10" />
            </View>

            <View className="flex items-center mt-20">
              <Text className="text-[#1A6D66] text-xl">Resend in 00:28</Text>
              <Button href="/" text="Resend Code" />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
};

export default Verify;
