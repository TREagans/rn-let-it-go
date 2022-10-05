import React, { useState } from 'react';
import { Text, View, Image, ScrollView, SafeAreaView, Pressable } from 'react-native';
import AuthHeader from '../../../components/AuthHeader/AuthHeader';
import Checkbox from '../../../components/Checkbox/Checkbox';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import { styles } from './styles';
import Separator from '../../../components/Separator/Separator';
import GoogleLogin from '../../../components/GoogleLogin/GoogleLogin';
import { colors } from '../../../utils/colors';

const Signin = () => {
  // this state is used to determine checkbox status
  const [isChecked, setIsChecked] = useState(false);

  const onSignUp = () => {
    console.log('Sign Up clicked');
  }

  return (
    <ScrollView style={styles.container}>
        <AuthHeader label='Sign In' />

        <Input inputLabel='Name' placeHolder='John Doe' />
        <Input isPassword inputLabel='Password' placeHolder='**********' />

        {/* using custom styles from the parent component */}
        <Button style={styles.button} label='Sign In' />

        <Separator label='Or sign in with' />

        <GoogleLogin />

        <Text style={styles.footerText}>
          Don't have an account?
          <Text onPress={onSignUp} style={styles.footerLink}> Sign Up</Text>
        </Text>
    </ScrollView>
  )
}

export default React.memo(Signin);