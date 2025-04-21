import { openAuthSessionAsync } from 'expo-web-browser';

export const handleLinkedInLogin = async () => {
  try {
    const response = await fetch('http://172.20.10.11:3000/api/auth/linkedin');
    const data = await response.json();

    await openAuthSessionAsync(data.authorization);
    // @TODO: Redirect user back to the app and complete this function
  } catch (error) {
    console.error('Error during LinkedIn login:', error);
  }
};
