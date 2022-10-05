import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        marginHorizontal: 12,
    },
    button: {
        marginVertical: 21
    },
    footerText: {
        color: colors.primaryBlue,
        marginBottom: 60,
        textAlign: 'center',
    },
    footerLink: {
        fontWeight: 'bold'
    }
})