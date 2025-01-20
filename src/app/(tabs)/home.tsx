import { SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MatchHeader from '../features/match-header/MatchHeader';
import Match from '../features/match/Match';

const home = () => {
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
          <Match
            user={{
              name: 'John Smith',
              type: 'Mentor',
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default home;
