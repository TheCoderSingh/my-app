import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, View } from 'react-native';
import MatchCard from '../features/match-card/MatchCard';
import images from '../../constants/images';

const matches = () => {
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
        <View className="mt-8 px-6">
          <Text className="font-body text-3xl">Your Matches</Text>
          <MatchCard
            type="Mentor"
            imgSrc={images.xd}
            name="John Smith"
            notification="Sent 1h ago"
            className="mt-8"
          />
          <MatchCard
            type="Hackathon Partner"
            imgSrc={images.xd}
            name="John Smith"
            notification="Sent 1h ago"
            className="mt-8"
          />
          <MatchCard
            type="Hackathon Partner"
            imgSrc={images.xd}
            name="John Smith"
            notification="Sent 1h ago"
            className="mt-8"
          />
          <MatchCard
            type="Mentee"
            imgSrc={images.xd}
            name="John Smith"
            notification="Sent 1h ago"
            className="mt-8"
          />
          <MatchCard
            type="Industry Connection"
            imgSrc={images.xd}
            name="John Smith"
            notification="Sent 1h ago"
            className="mt-8"
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default matches;
