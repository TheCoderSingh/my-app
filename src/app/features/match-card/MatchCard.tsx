import { View, Text, Image } from 'react-native';
import type { ImageProps } from 'react-native';

interface MatchCardProps {
  type: string;
  imgSrc: ImageProps['source'];
  name: string;
  notification: string;
  className: string;
}

/**
 * MatchCard Component
 *
 * This component displays a card with information about a match,
 * such as a mentor, mentee, hackathon partner, or other roles.
 * It includes the user's name, type, a notification, and an image.
 * The card style adjusts based on the provided type.
 *
 * @param {Object} props - Props for the MatchCard component.
 * @param {string} props.type - The type of match (e.g., 'Mentor', 'Mentee', 'Hackathon Partner').
 * @param {ImageProps['source']} props.imgSrc - The source of the user's profile image.
 * @param {string} props.name - The name of the matched user.
 * @param {string} props.notification - A notification or brief description related to the match.
 * @param {string} props.className - Additional Tailwind CSS classes for custom styling.
 *
 * @returns {JSX.Element} The MatchCard component displaying match details with dynamic styles.
 */
const MatchCard = ({
  type,
  imgSrc,
  name,
  notification,
  className,
}: MatchCardProps): JSX.Element => {
  return (
    <View
      className={`flex flex-row justify-between p-4 rounded-2xl ${className}`}
      style={{
        boxShadow: `0px 0px 20px 0px ${type === 'Mentor' ? '#779C1966' : type === 'Mentee' ? '#EB7D0766' : type === 'Hackathon Partner' ? '#41ACBA66' : '#DDB23F66'}`,
      }}
    >
      <View>
        <Text className="mb-2 font-heading uppercase color-primary-one">
          {type}
        </Text>
        <Text className="mb-3 font-heading text-xl">{name}</Text>
        <Text className="font-body color-[#828282]">{notification}</Text>
      </View>
      <View>
        <Image
          height={70}
          width={70}
          source={imgSrc}
          className="rounded-full border-4 border-primary-one"
        />
      </View>
    </View>
  );
};

export default MatchCard;
