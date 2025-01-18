import { Tabs } from 'expo-router';
import { Image, View } from 'react-native';

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
              <Image
                source={require('../../../assets/images/home.png')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
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
              <Image
                source={require('../../../assets/images/matches.png')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
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
              <Image
                source={require('../../../assets/images/events.png')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
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
              <Image
                source={require('../../../assets/images/profile.png')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
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
              <Image
                source={require('../../../assets/images/settings.png')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
