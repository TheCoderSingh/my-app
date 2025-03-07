import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setSelectedOption } from './PickerSlice';
import { ArrowDown } from '@/src/constants/icons';

interface PickerProps {
  textColor: string;
  options: string[];
}

/**
 * Picker Component
 *
 * A custom dropdown picker component that allows users to select an option
 * from a provided list. The selected option is managed using Redux for global state
 * management. The picker toggles open and closed on user interaction.
 *
 * @param {Object} props - The props for the Picker component.
 * @param {string} props.textColor - The color of the text displayed in the picker.
 * @param {string[]} props.options - An array of string options to display in the dropdown.
 *
 * @returns {JSX.Element} The Picker component for selecting an option from a list.
 */
const Picker = ({ textColor, options }: PickerProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = useSelector(
    (state: RootState) => state.pickerReducer.selectedOption
  );
  const dispatch = useDispatch();

  const handleOptionSelect = (option: string) => {
    dispatch(setSelectedOption(option));
    setIsOpen(false);
  };

  const togglePicker = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={togglePicker}
        className="mb-2 border border-primary-one rounded-xl py-1 px-1 flex-row justify-between items-center h-[30px]"
      >
        <Text className="font-body pl-4 text-lg" style={{ color: textColor }}>
          {selectedOption}
        </Text>
        <ArrowDown />
      </TouchableOpacity>
      {isOpen &&
        options.map(
          (option) =>
            option !== selectedOption && (
              <TouchableOpacity
                key={option}
                onPress={() => handleOptionSelect(option)}
                className="mb-2 border border-primary-one rounded-xl p-2 bg-white z-10"
              >
                <Text
                  className="font-body text-center"
                  style={{ color: textColor }}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            )
        )}
    </View>
  );
};

export default Picker;
