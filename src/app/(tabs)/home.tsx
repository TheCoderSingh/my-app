import { Text, SafeAreaView, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Picker from '../features/picker/Picker';
import { options } from '@/src/utils/mockData';

const home = () => {
  return (
    <View>
      <View
        style={{
          height: 48, // iOS typical status bar height is 44
          backgroundColor: '#fff',
        }}
      >
        <StatusBar style="dark" />
      </View>

      <SafeAreaView className="bg-[#E0E0E0] h-full">
        <View
          className="h-[96px] bg-white flex flex-row justify-center py-8 rounded-b-[30px] gap-x-6"
          // style={{
          //   shadowColor: 'rgba(225, 232, 208, 1)',
          //   shadowOffset: { width: 0, height: 5 },
          //   shadowOpacity: 1,
          //   shadowRadius: 38,
          //   elevation: 5, // for Android
          // }}
        >
          <View>
            <Text className="text-xl text-center font-body tracking-[-1px]">
              Match with
            </Text>
          </View>
          <View className="w-[250px]">
            <Picker textColor="#313144" options={options} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default home;
