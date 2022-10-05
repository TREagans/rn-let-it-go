import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 50,
        marginTop: 10
    },
    googleButton: {
        backgroundColor: colors.darkBlue,
        width: '45%',
        height: 60,
        borderRadius: 14,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    googleIcon: {
        width: 30,
        height: 30,
    }
});