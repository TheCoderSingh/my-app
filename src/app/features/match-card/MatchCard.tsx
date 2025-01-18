import { View, Text, Image } from 'react-native';
import type { ImageProps } from 'react-native';

interface MatchCardProps {
  type: string;
  imgSrc: ImageProps['source'];
  name: string;
  notification: string;
  className: string;
}

const MatchCard = ({
  type,
  imgSrc,
  name,
  notification,
  className,
}: MatchCardProps) => {
  const shadowColors: Record<string, string> = {
    Mentor: '#779C1966',
    Mentee: '#EB7D0766',
    'Industry Connection': '#DDB23F66',
    'Hackathon Partner': '#41ACBA66',
  };

  return (
    <View
      className={`flex flex-row justify-between p-4 rounded-2xl ${className}`}
      style={{
        boxShadow: `0px 0px 20px 0px ${shadowColors[type]}`,
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
