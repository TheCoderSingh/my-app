import { Text, SafeAreaView, View } from 'react-native';

const home = () => {
  return (
    <View className="bg-[#eb2] h-full">
      <View
        className="h-[96px] bg-white flex flex-row justify-center py-8 rounded-b-[30px] "
        style={{
          shadowColor: 'rgba(225, 232, 208, 1)',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 1,
          shadowRadius: 38,
          elevation: 5, // for Android
        }}
      >
        <View>
          <Text className="text-xl text-center font-body tracking-[-1px]">
            Match with a:
          </Text>
        </View>
        <View>{/* <Picker /> */}</View>
      </View>
    </View>
  );
};

export default home;
