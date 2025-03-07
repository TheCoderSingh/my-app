import { Tabs } from 'expo-router';
import { View } from 'react-native';
import {
  EventsActive,
  EventsInactive,
  HomeActive,
  HomeInactive,
  MatchesActive,
  MatchesInactive,
  ProfileActive,
  ProfileInactive,
  SettingsActive,
  SettingsInactive,
} from '@/src/constants/icons';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1A6D66',
        tabBarInactiveTintColor: '#BDBDBD',
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderTopWidth: focused ? 2 : 0,
                borderTopColor: color,
                width: '100%',
                height: '100%',
                paddingTop: 20,
                marginTop: focused ? -10 : -8,
              }}
            >
              {focused ? <HomeActive /> : <HomeInactive />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderTopWidth: focused ? 2 : 0,
                borderTopColor: color,
                width: '100%',
                height: '100%',
                paddingTop: 20,
                marginTop: focused ? -10 : -8,
              }}
            >
              {focused ? <MatchesActive /> : <MatchesInactive />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderTopWidth: focused ? 2 : 0,
                borderTopColor: color,
                width: '100%',
                height: '100%',
                paddingTop: 20,
                marginTop: focused ? -10 : -8,
              }}
            >
              {focused ? <EventsActive /> : <EventsInactive />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderTopWidth: focused ? 2 : 0,
                borderTopColor: color,
                width: '100%',
                height: '100%',
                paddingTop: 20,
                marginTop: focused ? -10 : -8,
              }}
            >
              {focused ? <ProfileActive /> : <ProfileInactive />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderTopWidth: focused ? 2 : 0,
                borderTopColor: color,
                width: '100%',
                height: '100%',
                paddingTop: 20,
                marginTop: focused ? -10 : -8,
              }}
            >
              {focused ? <SettingsActive /> : <SettingsInactive />}
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
