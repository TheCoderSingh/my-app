import {
  openAuthSessionAsync,
  maybeCompleteAuthSession,
} from 'expo-web-browser';
import * as Linking from 'expo-linking';

maybeCompleteAuthSession();

export const handleLinkedInLogin = async () => {
  try {
    const redirectUri = Linking.createURL('oauth'); // e.g. twiine://oauth
    const response = await fetch(
      `${process.env.EXPO_PUBLIC_API_URL}/auth/linkedin`
    );
    const { authorization } = await response.json();
    const result = await openAuthSessionAsync(authorization, redirectUri);

    if (result.type === 'success' && result.url) {
      const { queryParams } = Linking.parse(result.url);
      console.log('Login Success: ', queryParams);
    } else {
      console.log('Login canceled or failed:', result);
    }
  } catch (error) {
    console.error('Error during LinkedIn login:', error);
  }
};

export const handleGoogleLogin = async () => {
  // Login with Google
};

export const handleAppleLogin = async () => {
  // Login with Apple
};

export const handleGithubLogin = async () => {
  // Login with GitHub
};
