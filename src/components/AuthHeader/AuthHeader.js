import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';

// We'll receive the label text from parent, as well as
// a functionwe can call to go back to the previous screen
const AuthHeader = ({ label, onBackPress }) => {

  return (
    <View style={styles.container}>
        <Pressable hitSlop={20} onPress={onBackPress}>
            <Image style={styles.headerIcon} source={require('../../assets/left-arrow.png')} />
        </Pressable>
        <Text style={styles.headerTitle}>{label}</Text>
    </View>
  )
}

export default React.memo(AuthHeader);