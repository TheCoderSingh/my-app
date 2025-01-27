import { Image, View, Text } from 'react-native';
import LinkBar from '../../features/link-bar/LinkBar';
import RoundButton from '../../features/round-button/RoundButton';
import images from '../../../constants/images';
import {
  Education,
  Industry,
  Location,
  MatchNo,
  MatchYes,
  Work,
} from '@/src/constants/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ExternalPathString } from 'expo-router';

interface User {
  type: string;
  name: string;
}

const Match = ({ user }: { user: User }) => {
  const users = useSelector((state: RootState) => state.usersReducer.users);

  return (
    <View>
      {/* Name and picture */}
      <View className="flex flex-row justify-between">
        <View>
          <Text className="color-secondary-one font-heading text-lg uppercase">
            {user.type}
          </Text>
          <Text className="font-heading text-4xl mt-1">{users[0].name}</Text>
        </View>
        <View className="border-4 rounded-full border-secondary-one">
          <Image
            height={70}
            width={70}
            source={{
              uri: 'https://avatar.iran.liara.run/public/28',
            }}
          />
        </View>
      </View>

      {/* Details */}
      <View>
        <View className="flex flex-row items-center gap-3">
          <Work width={20} height={20} />
          <Text className="font-body text-sm">
            {users[0].currentTitle} at {users[0].currentCompany}
          </Text>
        </View>
        <View className="flex flex-row items-center gap-3 mt-2">
          <Education width={20} height={20} />
          <Text className="font-body text-sm">
            {users[0].education[0].degree} at {users[0].education[0].school}
          </Text>
        </View>
        <View className="flex flex-row items-center gap-3 mt-2">
          <Location width={20} height={20} />
          <Text className="font-body text-sm">{users[0].location}</Text>
        </View>
        <View className="flex flex-row items-center gap-2 mt-2">
          <Industry width={20} height={20} />
          <Text className="font-body text-sm bg-[#73942033] px-2 py-2 rounded-xl">
            Design
          </Text>
          <Text className="font-body text-sm bg-[#73942033] px-2 py-2 rounded-xl">
            Video Games
          </Text>
          <Text className="font-body text-sm bg-[#73942033] px-2 py-2 rounded-xl">
            Software Development & IT
          </Text>
        </View>
      </View>

      {/* Bio */}
      <View>
        <Text className="font-body text-xl mt-6">A little about me...</Text>
        <Text className="font-body mt-2 leading-6 tracking-tight">
          {users[0].bio}
        </Text>
      </View>

      {/* Portfolio */}
      <View className="flex flex-row justify-between items-center mt-3">
        <Text className="font-body">Portfolio:</Text>
        <LinkBar
          href={users[0].website as ExternalPathString}
          text={users[0].website || ''}
        />
      </View>

      {/* Skills */}
      <View className="mt-8">
        <Text className="font-heading text-center mb-4">Skills</Text>
        <View>
          {/* Skills with icons go here */}
          <View className="flex flex-row justify-center gap-x-8">
            <View className="flex flex-col items-center">
              <Image source={images.figma} height={55} width={55} />
              <Text className="font-body text-sm mt-2">Figma</Text>
            </View>
            <View className="flex flex-col items-center">
              <Image source={images.usertesting} height={55} width={55} />
              <Text className="font-body text-sm mt-2">UserTesting</Text>
            </View>
            <View className="flex flex-col items-center">
              <Image source={images.xd} height={55} width={55} />
              <Text className="font-body text-sm mt-2">Adobe XD</Text>
            </View>
            <View className="flex flex-col items-center">
              <Image source={images.github} height={55} width={55} />
              <Text className="font-body text-sm mt-2">GitHub</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Contact */}
      <View className="mt-8 px-6">
        <View className="flex flex-row items-center justify-center gap-3">
          <Image source={images.linkedin} />
          <LinkBar
            href="https://linkedin.com/in/john-smith"
            text="linkedin.com/in/john-smith"
          />
        </View>
        <View className="flex flex-row items-center justify-center gap-3 mt-4">
          <Image source={images.git} />
          <LinkBar
            href="https://github.com/jsssmith"
            text="github.com/jsssmith"
          />
        </View>
      </View>

      {/* Cross and tick buttons */}
      <View>
        <View className="flex flex-row justify-center mt-8 gap-x-10">
          <RoundButton type="match-no" />
          <RoundButton type="match-yes" />
        </View>
      </View>
    </View>
  );
};

export default Match;
