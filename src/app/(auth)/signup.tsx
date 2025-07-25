import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
  Pressable,
} from 'react-native';
import { useState, useRef, useEffect } from 'react';
import Button from '../features/button/Button';
import { Link } from 'expo-router';
import SocialIcons from '../features/social-icons/SocialIcons';
import { useSelector } from 'react-redux';
import CountryPicker, { Country, CountryCode, FlagType, getAllCountries, getCallingCode } from 'react-native-country-picker-modal';

const Signup = () => {
  const authError = useSelector(
    (state: any) => state.currentUserReducer.authError
  );

  const [input, setInput] = useState('');
  const [countryCode, setCountryCode] = useState<CountryCode>('CA');
  const [callingCode, setCallingCode] = useState('+1');

  // Cache the country list
  const countryListRef = useRef<Country[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const countries = await getAllCountries(FlagType.EMOJI);
        countryListRef.current = countries;
      } catch (e) {
        console.warn('Failed to load countries:', e);
      }
    })();
  }, []);

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCallingCode(`+${country.callingCode[0]}`);
  };

  const handleChange = async (text: string) => {
    // If the input is empty, reset the input state
    if (text === '') {
      setInput('');
      return;
    }

    setInput(text);
  };

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

            <View className="my-20 flex-row items-center border border-[#1A6D66] rounded-[10px] px-3">
              <CountryPicker
                countryCode={countryCode}
                withCallingCode
                withFilter
                withFlag
                withEmoji
                onSelect={onSelect}
                containerButtonStyle={{
                  marginRight: 8,
                  backgroundColor: 'transparent',
                  paddingVertical: 0,
                  paddingHorizontal: 0,
                  borderWidth: 0,
                }}
              />
              <Text style={{ marginRight: 8, fontSize: 16 }}>{callingCode}</Text>
              <TextInput
              style={{ flex: 1, paddingVertical: 16 }}
              placeholder="Enter your phone number"
              value={input}
              onChangeText={(text) => {
                const numericOnly = text.replace(/\D/g, ''); // removes everything except digits
                handleChange(numericOnly);
              }}
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoFocus
              autoComplete="tel"
              className="flex-1 placeholder:text-[#aaa]"
              />
            </View>

            <View className="mt-15">
              <Button
                text="Continue"
                filled
                className="mb-10"
                href={'/(auth)/verify'}
              />
              
              <View className="flex flex-row justify-center items-center mb-10">
                <View className="w-1/3 border-t border-[#222] mr-3" />
                <Text>OR</Text>
                <View className="w-1/3 border-t border-[#222] ml-3" />
              </View>

              <SocialIcons />

              <Text className="text-center text-[#666] mb-6">
                Already have an account?{' '}
                <Link href={'/(auth)/login'} className="text-[#1A6D66]">
                  Login
                </Link>
              </Text>

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
