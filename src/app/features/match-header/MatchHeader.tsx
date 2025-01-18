import { View, Text } from 'react-native';
import Picker from '../picker/Picker';
import { options } from '@/src/utils/mockData';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const MatchHeader = () => {
  const selectedOption = useSelector(
    (state: RootState) => state.selectedOption
  );

  const shadowColors: Record<string, string> = {
    Mentors: '#E1E8D0',
    Mentees: '#FFE5D2',
    'Industry Connections': '#F9E7BE',
    'Hackathon Partners': '#D2E2E4',
  };

  return (
    <View
      className="h-[60px] bg-white flex flex-row justify-center py-4 rounded-b-[30px] gap-x-6"
      style={{
        boxShadow: `0px 20px 38px ${shadowColors[selectedOption]}`, // Change according to current mode
      }}
    >
      <View>
        <Text className="text-xl text-center font-body tracking-[-1px] py-1">
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
