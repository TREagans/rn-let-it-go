
import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';

// props coming from parent component to determine the checked
// state of the component, and a function to change the state
const Checkbox = ({ isChecked, onCheck }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => onCheck(!isChecked)} style={styles.wrapper}>
                {
                    isChecked ? (
                        <View style={styles.innerContainer}>
                            <Image style={styles.checkIcon} source={require('../../assets/checkmark.png')} />
                        </View>
                    ) : null
                }
            </TouchableOpacity>
            <Text>I agree with <Text style={styles.terms}>Terms</Text> & <Text style={styles.terms}>Privacy</Text></Text>
        </View>
    )
}

export default React.memo(Checkbox);