import { Link } from 'expo-router';
import type { LinkProps } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

interface ButtonProps {
  text: string;
  filled?: boolean;
  href?: LinkProps['href'];
  className?: string;
  onPress?: () => void;
}

const Button = ({ text, filled, href, className, onPress }: ButtonProps) => {
  return href ? (
    <Link href={href} className={className}>
      <View
        className={`flex justify-center items-center w-full h-[38px] border border-[#1A6D66] rounded-[37px] `}
        style={{
          backgroundColor: filled ? 'rgba(26, 109, 102, 0.2)' : 'transparent',
        }}
      >
        <Text className="text-[#1A6D66] font-body">{text}</Text>
      </View>
    </Link>
  ) : (
    <Pressable onPress={onPress} className={className}>
      <View
        className="flex justify-center items-center w-full h-[38px] border border-[#1A6D66] rounded-[37px]"
        style={{
          backgroundColor: filled ? 'rgba(26, 109, 102, 0.2)' : 'transparent',
        }}
      >
        <Text className="text-[#1A6D66] font-body">{text}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
