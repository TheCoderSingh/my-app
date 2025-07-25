import { handleLogout } from '@/src/services/authService';
import { Link } from 'expo-router';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';

const settings = () => {
  return (
    <View>
      <SafeAreaView className="bg-[#FCFCFC] h-full justify-center items-center">
        <Text className="text-center text-4xl font-body mb-2">
          Settings are under construction—stay tuned!
        </Text>

        {/* Temporary logout */}
        <TouchableOpacity
          className="mt-4 bg-primary-two px-6 py-3 rounded-full"
          onPress={() => {
            handleLogout();
          }}
        >
          <Text className="text-white text-center font-body">Logout</Text>
          {/* </Link> */}
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default settings;
