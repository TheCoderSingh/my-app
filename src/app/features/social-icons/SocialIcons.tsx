import {
  handleAppleLogin,
  handleGithubLogin,
  handleGoogleLogin,
  handleLinkedInLogin,
} from '@/src/services/authService';
import { TouchableOpacity, View, Image } from 'react-native';
import images from '@/src/constants/images';
import { Link, Redirect } from 'expo-router';

const SocialIcons = () => {
  return (
    <View className="flex flex-row justify-center gap-8 mb-14">
      <TouchableOpacity className="p-2" onPress={handleAppleLogin}>
        <Image
          source={images.apple}
          className="w-10 h-10"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity className="p-2" onPress={handleLinkedInLogin}>
        <Image
          source={images.linkedin}
          className="w-12 h-10"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity className="p-2" onPress={handleGoogleLogin}>
        <Image
          source={images.google}
          className="w-10 h-10"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity className="p-2" onPress={handleGithubLogin}>
        <Link href={'/(tabs)/profile'}>
          <Image
            source={images.github}
            className="w-10 h-10"
            resizeMode="contain"
          />
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default SocialIcons;
