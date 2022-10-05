import { StyleSheet } from "react-native";
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    inputLabel: {
        color: colors.primaryBlue,
        marginBottom: 9,
        fontWeight: '500'
    },
    inputContainer: {
        borderColor: colors.primaryBlue,
        borderWidth: 1,
        borderRadius: 14,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 60,
        fontSize: 14,
        paddingLeft: 16,
        paddingRight: 5,
        flex: 1,
        color: colors.black
    },
    passwordIcon: {
        width: 24,
        height: 24,
        marginRight: 17
    }
});