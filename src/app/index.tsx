import { Text, View } from 'react-native';
import '../../global.css';
import { useFonts } from 'expo-font';
import { store } from './store/store';
import { Provider } from 'react-redux';

export default function Index() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../.././assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../.././assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Optionally add a loading spinner here
  }

  return (
    <Provider store={store}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text className="text-red-900">
          Edit app/index.tsx to edit this screen.
        </Text>
      </View>
    </Provider>
  );
}
