import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const Separator = ({ label }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{ label }</Text>
      <View style={styles.line} />
    </View>
  )
}

export default React.memo(Separator);