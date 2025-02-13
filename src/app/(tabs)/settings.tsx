import { Link } from 'expo-router';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';

const settings = () => {
  return (
    <View>
      <SafeAreaView className="bg-[#FCFCFC] h-full justify-center items-center">
        <Text className="text-center text-4xl font-body mb-2">
          Settings are under construction—stay tuned!
        </Text>

        <TouchableOpacity className="mt-4 bg-primary-two px-6 py-3 rounded-full">
          <Link href={'/(tabs)/home'}>
            <Text className="text-white text-center font-body">
              Find People
            </Text>
          </Link>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default settings;
