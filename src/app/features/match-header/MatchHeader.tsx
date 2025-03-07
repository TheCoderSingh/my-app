import { View, Text } from 'react-native';
import Picker from '../picker/Picker';
import { options } from '@/src/utils/mockData';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

/**
 * MatchHeader Component
 *
 * This component serves as the header for the match screen, allowing users
 * to select an option (e.g., Mentor, Mentee, Hackathon Partner) from a picker.
 * The header style dynamically changes based on the selected option to provide
 * visual feedback with different shadow colors.
 *
 * @returns {JSX.Element} The MatchHeader component displaying a title and a picker for user selection.
 */
const MatchHeader = (): JSX.Element => {
  const selectedOption = useSelector(
    (state: RootState) => state.pickerReducer.selectedOption
  );

  return (
    <View
      className="h-[60px] bg-white flex flex-row justify-center py-4 rounded-b-[30px] gap-x-6"
      style={{
        boxShadow: `0px 20px 38px ${
          selectedOption === 'Mentor'
            ? '#779C1966'
            : selectedOption === 'Mentee'
              ? '#EB7D0766'
              : selectedOption === 'Hackathon Partner'
                ? '#41ACBA66'
                : '#DDB23F66'
        }`,
      }}
    >
      <View>
        <Text className="text-xl text-center font-body tracking-[-1px] py-1">
          Match with a
        </Text>
      </View>
      <View className="w-[250px]">
        <Picker textColor="#313144" options={options} />
      </View>
    </View>
  );
};

export default MatchHeader;
