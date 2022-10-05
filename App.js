import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Signup from './src/screens/auth/Signup/Signup';
import { GOOGLE_WEB_CLIENT_ID, GOOGLE_OAUTH_CLIENT_ID } from '@env';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import SignIn from './src/screens/auth/Signin/SignIn';

const App = () => {
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: `${GOOGLE_WEB_CLIENT_ID}`, // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    iosClientId: `${GOOGLE_OAUTH_CLIENT_ID}`, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });
  
  // runs only once when the project loads
  useEffect(() => {

  }, []);

  return (
    <SafeAreaView>
      {/* <Signup /> */}
      <SignIn />
    </SafeAreaView>
  );
};

export default App;
