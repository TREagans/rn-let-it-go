import React from 'react';
import { Text, View, Image, Pressable, SafeAreaView } from 'react-native';
import Button from '../../../components/Button/Button';
import { styles } from './styles';

const Splash = () => {

  const handlePress = () => {
    console.log('Pressable pressed!');
  }
  
  return (
    <SafeAreaView style={styles.screenContainer}>

        {/* whenever we're referencing a local image, we use require() */}
        <Image resizeMode='contain' style={styles.image} source={require('../../../assets/splash-img.png')} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>You’ll Find</Text> 
          <Text style={[styles.title, styles.innerTitle]}>All You Need</Text> 
          <Text style={styles.title}>Here!</Text>
        </View>

        <Button label='Sign Up' />

        <Pressable onPress={handlePress} hitSlop={20}>
          <Text style={styles.signIn}>Sign In</Text>
        </Pressable>

    </SafeAreaView>
  )
}

export default React.memo(Splash);