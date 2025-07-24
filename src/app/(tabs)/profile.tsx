import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LinkBar from '../features/link-bar/LinkBar';
import images from '@/src/constants/images';
import { Education, Industry, Location, Work } from '@/src/constants/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const profile = () => {
  const user = useSelector((state: RootState) => state.currentUserReducer);

  return (
    <View>
      {/* Status bar */}
      <View
        style={{
          height: 48, // iOS typical status bar height is 44
          backgroundColor: '#fff',
        }}
      >
        <StatusBar style="dark" />
      </View>

      <SafeAreaView className="bg-[#FCFCFC] h-full">
        <ScrollView className="mt-8 px-6">
          {/* Name and picture */}
          <View className="flex flex-row justify-between mt-12">
            <View>
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
                {user.currentTitle
                  ? `${user.currentTitle} at ${user.currentCompany}`
                  : 'Work not provided'}
              </Text>
            </View>
            <View className="flex flex-row items-center gap-3 mt-2">
              <Education width={20} height={20} />
              <Text className="font-body text-sm">
                {user.education?.[0]
                  ? `${user.education[0].degree} at ${user.education[0].school}`
                  : 'Education not provided'}
              </Text>
            </View>
            <View className="flex flex-row items-center gap-3 mt-2">
              <Location width={20} height={20} />
              <Text className="font-body text-sm">
                {user.location || 'Location not provided'}
              </Text>
            </View>
            <View className="flex flex-row items-center gap-2 mt-2">
              <Industry width={20} height={20} />
              {user.industries && user.industries.length > 0 ? (
                user.industries.map((industry, index) => (
                  <Text
                    key={index}
                    className="font-body text-sm bg-[#73942033] px-2 py-2 rounded-xl"
                  >
                    {industry}
                  </Text>
                ))
              ) : (
                <Text className="font-body text-sm pl-1">
                  Industries not provided
                </Text>
              )}
            </View>
          </View>

          {/* Bio */}
          <View>
            <Text className="font-body text-xl mt-6">About</Text>
            <Text className="font-body mt-2 leading-6 tracking-tight">
              {user.bio || 'No bio provided'}
            </Text>
          </View>

          {/* Skills */}
          <View className="mt-8">
            <Text className="font-heading text-center mb-4">Skills</Text>
            <View>
              {/* Skills with icons go here */}
              <View className="flex flex-row justify-center gap-x-8">
                {user.skills && user.skills.length > 0 ? (
                  user.skills.map((skill, index) => (
                    <View
                      key={index}
                      className="flex flex-col items-center"
                    >
                      <Image
                        source={images[skill.toLowerCase() as keyof typeof images]}
                        height={55}
                        width={55}
                      />
                      <Text className="font-body text-sm mt-2">{skill}</Text>
                    </View>
                  ))
                ) : (
                  <Text className="font-body text-sm">
                    No skills provided
                  </Text>
                )}
              </View>
            </View>
          </View>

          {/* Contact */}
          <View className="mt-8 px-3">
            {/* LinkedIn */}
            {user.linkedinUrl && (
              <View className="flex flex-row items-center justify-between gap-3">
                <Image source={images.linkedinDark} className='w-7 h-7'/>
                <LinkBar
                  href={user.linkedinUrl}
                  text={user.linkedinUrl}
                />
              </View>
            )}

            {/* GitHub */}
            {user.githubUrl && (
              <View className="flex flex-row items-center justify-between gap-3 mt-4">
                <Image source={images.githubDark} className='w-7 h-7'/>
                <LinkBar
                  href={user.githubUrl}
                  text={user.githubUrl}
                />
              </View>
            )}

            {/* Portfolio */}
            {user.website && (
             <View className="flex flex-row justify-between items-center mt-4">
              <Text className="font-body mr-1">Portfolio:</Text>
              <LinkBar
                href={user.website}
                text={user.website}
                className="flex-1"
              />
            </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default profile;
