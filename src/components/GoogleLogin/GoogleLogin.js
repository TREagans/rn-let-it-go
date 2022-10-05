import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { styles } from './styles';

const GoogleLogin = () => {
    const [userInfo, setUserInfo] = useState();

    const googleLoginHandler = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('UserInfo ===> ', userInfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={googleLoginHandler} activeOpacity={0.7} style={styles.googleButton}>
                <Image style={styles.googleIcon} source={require('../../assets/google-g.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default GoogleLogin;