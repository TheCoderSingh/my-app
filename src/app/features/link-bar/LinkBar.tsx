import { Link } from 'expo-router';
import { View, Text, Image } from 'react-native';
import type { LinkProps } from 'expo-router';
import images from '../../../constants/images';

interface LinkBarProps {
  href: LinkProps['href'];
  text: string;
}

const LinkBar = ({ href, text }: LinkBarProps) => {
  return (
    <View
      className="w-[300px] bg-white px-4 rounded-full h-[24px] py-1"
      style={{
        boxShadow: '0px 0px 7px 0px #00000040',
      }}
    >
      <Link href={href} target="_blank">
        <View className="flex flex-row justify-between items-center w-full">
          <Text className="color-[#828282] font-body text-sm">{text}</Text>
          <Image className="w-3 h-3" source={images.linkArrow} />
        </View>
      </Link>
    </View>
  );
};

export default LinkBar;
