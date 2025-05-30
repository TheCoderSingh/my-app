import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../.././assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../.././assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Optionally add a loading spinner here
  }

  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </Provider>
  );
}
