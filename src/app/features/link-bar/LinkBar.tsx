import { Link } from 'expo-router';
import { View, Text, Image } from 'react-native';
import type { LinkProps } from 'expo-router';
import images from '../../../constants/images';

interface LinkBarProps {
  href: string;
  text: string;
  className?: string; // Optional className for additional styling
}

/**
 * LinkBar Component
 *
 * This component renders a stylized link bar with text and an arrow icon.
 * It navigates to the provided `href` when clicked, opening the link in a new tab.
 *
 * @component
 * @param {LinkBarProps} props - The props for the LinkBar component.
 * @param {string} props.href - The URL to navigate to when the link is clicked.
 * @param {string} props.text - The display text for the link.
 * @param {string} [props.className] - Optional additional CSS classes for styling.
 *
 * @returns {JSX.Element} The rendered LinkBar component with a link and an arrow icon.
 *
 * @example
 * return (
 *   <LinkBar href="https://example.com" text="Visit Example" />
 * )
 */
const LinkBar = ({ href, text, className }: LinkBarProps): JSX.Element => {
  return (
    <View
      className={`w-[300px] bg-white px-4 rounded-full h-[24px] py-1 ${className}`}
      style={{
        boxShadow: '0px 0px 7px 0px #00000040',
      }}
    >
      <Link href={href as any} target="_blank">
        <View className="flex flex-row justify-between items-center w-full">
          <Text className="color-[#828282] font-body text-sm">{text}</Text>
          <Image className="w-3 h-3" source={images.linkArrow} />
        </View>
      </Link>
    </View>
  );
};

export default LinkBar;
