import {
  openAuthSessionAsync,
  maybeCompleteAuthSession,
} from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { setUserData } from '@/src/app/features/users/CurrentUserSlice';
import { store } from '../app/store/store';
import {
  signInAsync,
  AppleAuthenticationScope,
} from 'expo-apple-authentication';

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

      if (queryParams?.user) {
        if (queryParams.user && typeof queryParams.user === 'string') {
          try {
            // Convert JavaScript object literal to valid JSON
            const cleanedUserStr = queryParams.user
              .replace(/(\w+):/g, '"$1":') // Add quotes to property names
              .replace(/'/g, '"') // Replace single quotes with double quotes
              .replace(/new ObjectId\(['"]([^'"]+)['"]\)/g, '"$1"') // Replace ObjectId with string
              .replace(/__v: \d+,?/g, '') // Remove __v field
              .replace(/,(\s*[}\]])/g, '$1'); // Remove trailing commas

            const parsedUser = JSON.parse(cleanedUserStr);

            store.dispatch(setUserData(parsedUser));
          } catch (parseError) {
            console.error('Error parsing user data:', parseError);
          }
        }
      } else {
        console.log('Login failed: Missing user data in response.');
      }
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
  // @TODO: Send login data to backend
  try {
    const credential = await signInAsync({
      requestedScopes: [
        AppleAuthenticationScope.FULL_NAME,
        AppleAuthenticationScope.EMAIL,
      ],
    });
    if (credential) {
      // Store user data from Apple authentication
      const userData: any = {
        id: credential.user,
        email: credential.email,
        name:
          credential.fullName !== null
            ? `${credential.fullName?.givenName || ''} ${credential.fullName?.familyName || ''}`.trim()
            : null,
      };
      store.dispatch(setUserData(userData));
      console.log(userData);
    }
  } catch (error) {
    if (
      error instanceof Error &&
      'code' in error &&
      error.code === 'ERR_REQUEST_CANCELED'
    ) {
      console.log('User canceled Apple sign-in');
    } else {
      console.error('Error during Apple sign-in:', error);
    }
  }
};

export const handleGithubLogin = async () => {
  // Login with GitHub
};
