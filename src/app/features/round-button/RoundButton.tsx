import { TouchableOpacity, Image } from 'react-native';
import type { ImageProps } from 'react-native';

interface RoundButtonProps {
  imgSrc: ImageProps['source'];
}

const RoundButton = ({ imgSrc }: RoundButtonProps) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center"
      style={{
        boxShadow: '2px 5px 8.5px 0px #00000052',
      }}
    >
      <Image source={imgSrc} />
    </TouchableOpacity>
  );
};

export default RoundButton;
