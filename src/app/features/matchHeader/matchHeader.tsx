import { View, Text } from 'react-native';
import Picker from '../picker/Picker';
import { options } from '@/src/utils/mockData';

const MatchHeader = () => {
  return (
    <View
      className="h-[96px] bg-white flex flex-row justify-center py-8 rounded-b-[30px] gap-x-6"
      style={{
        boxShadow: '0px 5px 38px #E1E8D0', // Change according to current mode
      }}
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
  );
};

export default MatchHeader;
