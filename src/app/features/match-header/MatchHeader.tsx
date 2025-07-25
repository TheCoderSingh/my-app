import { View, Text, ScrollView } from 'react-native';
import { options } from '@/src/utils/mockData';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { setSelectedOption } from '../category/CategorySlice';
import Category from '../category/Category';

/**
 * MatchHeader Component
 *
 * This component serves as the header for the match screen, allowing users
 * to select an option (e.g., Mentor, Mentee, Hackathon Partner) from a category.
 * The header style dynamically changes based on the selected option to provide
 * visual feedback with different shadow colors.
 *
 * @returns {JSX.Element} The MatchHeader component displaying a title and a category for user selection.
 */
const MatchHeader = (): JSX.Element => {
  const selectedOption = useSelector(
    (state: RootState) => state.categoryReducer.selectedOption
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
        <Text className="text-lg font-body tracking-[-1px] ml-4">
          Match with a
        </Text>
      </View>
      <ScrollView horizontal>
        {options.map((option) => (
          <Category option={option} key={option} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MatchHeader;
