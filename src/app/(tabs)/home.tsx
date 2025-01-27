import { SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MatchHeader from '../features/match-header/MatchHeader';
import Match from '../features/match/Match';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const home = () => {
  const users = useSelector((state: RootState) => state.usersReducer.users);

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
          {/* TODO: Map over users and render a Match component for each */}
          <Match user={users[0]} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default home;
