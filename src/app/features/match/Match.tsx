import { Image, View, Text } from 'react-native';
import LinkBar from '../../features/link-bar/LinkBar';
import RoundButton from '../../features/round-button/RoundButton';
import images from '../../../constants/images';
import { Education, Industry, Location, Work } from '@/src/constants/icons';
import { ExternalPathString } from 'expo-router';
import { User } from '../users/UsersSlice';

/**
 * Match Component
 *
 * This component displays a user's profile details, including their name, photo, work information,
 * education, location, industries, bio, portfolio, skills, and contact links.
 * It also provides match interaction buttons (yes/no) for connecting with the user.
 *
 * @component
 * @param {Object} props - The props for the Match component.
 * @param {User} props.user - The user object containing profile details such as name, bio, skills, and contact info.
 *
 * @returns {JSX.Element} The rendered Match component showcasing the user's profile with interaction buttons.
 *
 * @example
 * const sampleUser = {
 *   name: 'John Doe',
 *   currentTitle: 'Software Engineer',
 *   currentCompany: 'TechCorp',
 *   education: [{ degree: 'B.Sc. in Computer Science', school: 'XYZ University' }],
 *   location: 'Vancouver, Canada',
 *   industries: ['Tech', 'AI'],
 *   bio: 'Passionate about building scalable applications.',
 *   website: 'https://johndoe.dev',
 * };
 *
 * return <Match user={sampleUser} />;
 */
const Match = ({ user }: { user: User }): JSX.Element => {
  return (
    <View>
      {/* Name and picture */}
      <View className="flex flex-row justify-between">
        <View>
          <Text className="color-secondary-one font-heading text-lg uppercase">
            Temporarily Mentor
          </Text>
          <Text className="font-heading text-4xl mt-1">{user.name}</Text>
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
            {user.currentTitle} at {user.currentCompany}
          </Text>
        </View>
        <View className="flex flex-row items-center gap-3 mt-2">
          <Education width={20} height={20} />
          <Text className="font-body text-sm">
            {user.education[0].degree} at {user.education[0].school}
          </Text>
        </View>
        <View className="flex flex-row items-center gap-3 mt-2">
          <Location width={20} height={20} />
          <Text className="font-body text-sm">{user.location}</Text>
        </View>
        <View className="flex flex-row items-center gap-2 mt-2">
          <Industry width={20} height={20} />
          <Text className="font-body text-sm bg-[#73942033] px-2 py-2 rounded-xl">
            {user.industries[0]}
          </Text>
          <Text className="font-body text-sm bg-[#73942033] px-2 py-2 rounded-xl">
            {user.industries[1] || ''}
          </Text>
          <Text className="font-body text-sm bg-[#73942033] px-2 py-2 rounded-xl">
            {user.industries[2] || ''}
          </Text>
        </View>
      </View>

      {/* Bio */}
      <View>
        <Text className="font-body text-xl mt-6">About</Text>
        <Text className="font-body mt-2 leading-6 tracking-tight">
          {user.bio}
        </Text>
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
              <Image source={images.git} height={55} width={55} />
              <Text className="font-body text-sm mt-2">GitHub</Text>
            </View>
          </View>
        </View>
      </View>


      {/* Portfolio */}
      <View className="flex flex-row justify-between items-center mt-3">
        <Text className="font-body">Portfolio:</Text>
        <LinkBar
          href={user.website as ExternalPathString}
          text={user.website || ''}
        />
      </View>


      {/* Contact */}
      <View className="mt-8 px-6">
        <View className="flex flex-row items-center justify-center gap-3">
          <Image source={images.figma} />
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
