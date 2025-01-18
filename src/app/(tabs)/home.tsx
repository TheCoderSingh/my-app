import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MatchHeader from '../features/match-header/MatchHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Link } from 'expo-router';
import LinkBar from '../features/link-bar/LinkBar';

const home = () => {
  const selectedOption = useSelector(
    (state: RootState) => state.selectedOption
  );

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
        {/* Header */}
        <MatchHeader />

        <View className="mt-8 px-6">
          {/* Name and picture */}
          <View className="flex flex-row justify-between">
            <View>
              <Text className="color-secondary-one font-heading text-lg uppercase">
                {selectedOption}
              </Text>
              <Text className="font-heading text-4xl mt-1">John Smith</Text>
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
              <Image source={require('../../../assets/images/briefcase.png')} />
              <Text className="font-body text-sm">
                Experience Designer at Electronic Arts
              </Text>
            </View>
            <View className="flex flex-row items-center gap-3 mt-2">
              <Image source={require('../../../assets/images/study.png')} />
              <Text className="font-body text-sm">
                Bachelor of Communications at UBC
              </Text>
            </View>
            <View className="flex flex-row items-center gap-3 mt-2">
              <Image source={require('../../../assets/images/location.png')} />
              <Text className="font-body text-sm">Langley, BC</Text>
            </View>
            <View className="flex flex-row items-center gap-2 mt-2">
              <Image
                source={require('../../../assets/images/categories.png')}
              />
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
              I am an Experience Designer with with a decade long track record
              of crafting intuitive, user-centered designs. I am enthusiastic
              about mentoring the next generation of designers and to help
              students thrive in the dynamic world of design.
            </Text>
          </View>

          {/* Portfolio */}
          <View className="flex flex-row justify-between items-center mt-3">
            <Text className="font-body">Portfolio:</Text>
            <LinkBar
              href="https://www.johnsmithux.com"
              text="johnsmithux.com"
            />
          </View>

          {/* Skills */}
          <View className="mt-8">
            <Text className="font-heading text-center mb-4">Skills</Text>
            <View>
              {/* Skills with icons go here */}
              <View className="flex flex-row justify-center gap-x-8">
                <View className="flex flex-col items-center">
                  <Image
                    source={require('../../../assets/images/figma.png')}
                    height={55}
                    width={55}
                  />
                  <Text className="font-body text-sm mt-2">Figma</Text>
                </View>
                <View className="flex flex-col items-center">
                  <Image
                    source={require('../../../assets/images/usertesting.png')}
                    height={55}
                    width={55}
                  />
                  <Text className="font-body text-sm mt-2">UserTesting</Text>
                </View>
                <View className="flex flex-col items-center">
                  <Image
                    source={require('../../../assets/images/xd.png')}
                    height={55}
                    width={55}
                  />
                  <Text className="font-body text-sm mt-2">Adobe XD</Text>
                </View>
                <View className="flex flex-col items-center">
                  <Image
                    source={require('../../../assets/images/github.png')}
                    height={55}
                    width={55}
                  />
                  <Text className="font-body text-sm mt-2">GitHub</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Contact */}
          <View className="mt-8 px-6">
            <View className="flex flex-row items-center justify-center gap-3">
              <Image source={require('../../../assets/images/linkedin.png')} />
              <LinkBar
                href="https://linkedin.com/in/john-smith"
                text="linkedin.com/in/john-smith"
              />
            </View>
            <View className="flex flex-row items-center justify-center gap-3 mt-4">
              <Image source={require('../../../assets/images/git.png')} />
              <LinkBar
                href="https://github.com/jsssmith"
                text="github.com/jsssmith"
              />
            </View>
          </View>

          {/* Cross and tick buttons */}
          <View>
            {/* Cross and tick buttons go here */}
            <View className="flex flex-row justify-center mt-8 gap-x-10">
              <TouchableOpacity
                className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center"
                style={{
                  boxShadow: '2px 5px 8.5px 0px #00000052',
                }}
              >
                <Image source={require('../../../assets/images/close.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center"
                style={{
                  boxShadow: '2px 5px 8.5px 0px #00000052',
                }}
              >
                <Image source={require('../../../assets/images/check.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default home;
