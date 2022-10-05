import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

// label is the button's text, style allows us to use custom styles,
// onPress will be used to execute a function within the parent element
const Button = ({ label, onPress, style }) => {
  
  return (
    // when button is clicked, we execute the parent's function thru the onPress prop
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container, style]}>
        <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

// preventing unnecessary re-renders
export default React.memo(Button);