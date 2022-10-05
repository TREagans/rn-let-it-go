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

const Signup = () => {
  // this state is used to determine checkbox status
  const [isChecked, setIsChecked] = useState(false);

  const onSignIn = () => {
    console.log('Sign In clicked');
  }

  return (
    <ScrollView style={styles.container}>
        <AuthHeader label='Sign Up' />

        <Input inputLabel='Name' placeHolder='John Doe' />
        <Input inputLabel='E-mail' placeHolder='example@gmail.com' />
        <Input isPassword inputLabel='Password' placeHolder='**********' />

        <View>
          {/* using the isChecked variable to determine whether checkbox is
              checked, and sending the setIsChecked function to the component */}
          <Checkbox isChecked={isChecked} onCheck={setIsChecked} />
        </View>

        {/* using custom styles from the parent component */}
        <Button style={styles.button} label='Sign Up' />

        <Separator label='Or sign up with' />

        <GoogleLogin />

        <Text style={styles.footerText}>
          Already have an account?
          <Text onPress={onSignIn} style={styles.footerLink}> Sign In</Text>
        </Text>
    </ScrollView>
  )
}

export default React.memo(Signup);