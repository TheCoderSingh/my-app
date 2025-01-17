import { SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MatchHeader from '../features/match-header/MatchHeader';

const home = () => {
  return (
    <View>
      <View
        style={{
          height: 48, // iOS typical status bar height is 44
          backgroundColor: '#fff',
        }}
      >
        <StatusBar style="dark" />
      </View>

      <SafeAreaView className="bg-[#FCFCFC] flex-1">
        <MatchHeader />
      </SafeAreaView>
    </View>
  );
};

export default home;
