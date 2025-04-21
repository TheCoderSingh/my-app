import { Link } from 'expo-router';
import type { LinkProps } from 'expo-router';
import { View, Text } from 'react-native';

interface ButtonProps {
  text: string;
  filled?: boolean;
  href?: LinkProps['href'];
  className?: string;
}

const Button = ({ text, filled, href, className }: ButtonProps) => {
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
    <View
      className={`flex justify-center items-center w-full h-[38px] border border-[#1A6D66] rounded-[37px] ${className}`}
      style={{
        backgroundColor: filled ? 'rgba(26, 109, 102, 0.2)' : 'transparent',
      }}
    >
      <Text className="text-[#1A6D66] font-body">{text}</Text>
    </View>
  );
};

export default Button;
