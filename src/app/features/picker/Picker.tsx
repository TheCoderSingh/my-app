import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setSelectedOption } from './pickerSlice';

interface PickerProps {
  textColor: string;
  options: string[];
}

const Picker = ({ textColor, options }: PickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = useSelector(
    (state: RootState) => state.selectedOption
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
        <Image
          source={require('../../../../assets/images/arrowDown.png')}
          style={{ width: 12, height: 7 }}
          className="mr-2"
        />
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
