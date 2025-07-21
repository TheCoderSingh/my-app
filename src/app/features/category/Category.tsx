import { Text, TouchableOpacity, View } from "react-native";
import { setSelectedOption } from './CategorySlice';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

type CategoryProps = {
  option: string;
};

const Category = ({option}: CategoryProps) => {
  const dispatch = useDispatch();
  const selectedOption = useSelector(
    (state: RootState) => state.categoryReducer.selectedOption
  );

  return (
    <View className="mr-1">
        <TouchableOpacity onPress={() => dispatch(setSelectedOption(option))} className={`border border-gray-400 rounded-xl py-1 h-[25px] text-center ${selectedOption === option ? option === "Mentor" ? "bg-mentor-shadow" : selectedOption === "Mentee" ? "bg-mentee-shadow" : selectedOption === "Industry Connection" ? "bg-connection-shadow" : "bg-hackathon-shadow":""}`}>
            <Text className="font-body px-4" style={{ color: '#313144' }}>
            {option}
            </Text>        
        </TouchableOpacity>
    </View>
  );
};

export default Category;
