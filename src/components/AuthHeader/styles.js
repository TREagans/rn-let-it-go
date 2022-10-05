import { StyleSheet } from "react-native";
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 54
    },
    headerIcon: {
        width: 18,
        height: 18
    },
    headerTitle: {
        color: colors.primaryBlue,
        paddingHorizontal: 16,
        fontWeight: '600',
        fontSize: 26
    }
})