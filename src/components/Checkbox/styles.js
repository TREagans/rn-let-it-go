import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    wrapper: {
        width: 22,
        height: 22,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.darkGray,
        marginRight: 13
    },
    innerContainer: {
        backgroundColor: colors.darkGray,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkIcon: {
        width: 12,
        height: 7,
    },
    terms: {
       fontWeight: '700',
       color: colors.primaryBlue
    }
});