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
import { router, Router, useRouter } from 'expo-router';
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';
import * as AuthSession from 'expo-auth-session';

maybeCompleteAuthSession();

export const handleLinkedInLogin = async (router: Router) => {
  try {
    const router = useRouter();

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
            router.replace('/profile');
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
  /* Uncomment once built | Does not work on Expo Go */
  // GoogleSignin.configure({
  //   webClientId:
  //     'YOUR_GOOGLE_WEB_CLIENT_ID.apps.googleusercontent.com',
  // });
  // try {
  //   await GoogleSignin.hasPlayServices();
  //   const userInfo = await GoogleSignin.signIn();
  //   if (isSuccessResponse(userInfo)) {
  //     console.log('User Info:', userInfo);
  //     // Handle user info, e.g., dispatch to Redux or navigate
  //   } else {
  //     console.log('Sign-in was canceled or failed:', userInfo);
  //   }
  // } catch (error) {
  //   if (isErrorWithCode(error)) {
  //     switch (error.code) {
  //       case statusCodes.SIGN_IN_CANCELLED:
  //         console.log('User canceled the sign-in flow');
  //         break;
  //       case statusCodes.IN_PROGRESS:
  //         console.log('Sign-in is in progress');
  //         break;
  //       case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
  //         console.log('Play services are not available');
  //         break;
  //       default:
  //         console.error('An error occurred during sign-in:', error);
  //     }
  //   }
  // }
};

export const handleAppleLogin = async () => {
  try {
    const credential = await signInAsync({
      requestedScopes: [
        AppleAuthenticationScope.FULL_NAME,
        AppleAuthenticationScope.EMAIL,
      ],
    });
    if (credential) {
      const userData: any = {
        id: credential.user,
        email: credential.email,
        name:
          credential.fullName !== null
            ? `${credential.fullName?.givenName || ''} ${credential.fullName?.familyName || ''}`.trim()
            : null,
        identityToken: credential.identityToken,
      };

      // @TODO: Send login data to backend
      const response = await fetch(`${API_URL}/auth/apple`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userData.id,
          email: userData.email,
          name: userData.name,
          identityToken: userData.identityToken,
        }),
      });

      if (!response.ok) {
        const errorMsg = 'Failed to log in with Apple';
        store.dispatch({ type: 'currentUser/setAuthError', payload: errorMsg });
        throw new Error(errorMsg);
      }
      const data = await response.json();
      console.log('Apple login response:', data);

      store.dispatch(setUserData(userData));
      store.dispatch({ type: 'currentUser/clearAuthError' });
      router.replace('/profile');
    }
  } catch (error) {
    let errorMsg = 'Error during Apple sign-in';

    if (
      error instanceof Error &&
      'code' in error &&
      (error as any).code === 'ERR_REQUEST_CANCELED'
    ) {
      errorMsg = 'User canceled Apple sign-in';
      console.log(errorMsg);
    } else {
      if (error instanceof Error) {
        errorMsg = 'Error during Apple sign-in: ' + error.message;
      }
    }
    store.dispatch({ type: 'currentUser/setAuthError', payload: errorMsg });
  }
};

const GITHUB_CLIENT_ID = process.env.EXPO_PUBLIC_GITHUB_CLIENT_ID!;
const API_URL = process.env.EXPO_PUBLIC_API_URL!;

export const handleGithubLogin = async () => {
  try {
    // For Expo Go and web, this will be https://auth.expo.io/@codersingh/twiine
    const redirectUri = AuthSession.makeRedirectUri();

    const authUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=read:user%20user:email&redirect_uri=${encodeURIComponent(
      redirectUri
    )}`;

    const result = await openAuthSessionAsync(authUrl, redirectUri);

    if (result.type === 'success' && result.url) {
      const url = new URL(result.url);
      const code = url.searchParams.get('code');

      if (!code) throw new Error('No code returned from GitHub');

      // // Send the code to your backend
      // const response = await fetch(`${API_URL}/auth/github`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ code }),
      // });

      // if (!response.ok) throw new Error('Backend login failed');

      // const { user, tokens } = await response.json();
      // console.log('GitHub user:', user);

      router.replace('/(tabs)/home');
    } else if (result.type === 'dismiss') {
      Alert.alert('GitHub login cancelled');
    } else {
      throw new Error('GitHub login failed');
    }
  } catch (err: any) {
    console.error('GitHub login error:', err);
    Alert.alert('Login error', err.message || 'Something went wrong');
  }
};
