import React, { useState } from 'react';
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import { styles } from './styles';

// isPassword will be used to identify password input fields
const Input = ({ inputLabel, placeHolder, isPassword }) => {
    
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const showPasswordHandler = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.inputLabel}>{inputLabel}</Text>

            <View style={styles.inputContainer}>
                {/* secureTextEntry hides the text in a TextInput field */}
                <TextInput secureTextEntry={!isPasswordVisible && isPassword} style={styles.input} placeholder={placeHolder} />

                {
                    isPassword ? (
                        <Pressable onPress={showPasswordHandler}>
                            <Image style={styles.passwordIcon} source={!isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_closed.png')} />
                        </Pressable>
                    ) : null
                }

            </View>
        </View>
    )
}

export default React.memo(Input);