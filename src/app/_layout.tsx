import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../.././assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../.././assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Optionally add a loading spinner here
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
