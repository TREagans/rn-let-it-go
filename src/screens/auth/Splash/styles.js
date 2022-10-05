import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    screenContainer: {
        paddingHorizontal: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        height: '100%',
    },
    image: {
        width: '100%',
        height: 200
    },
    titleContainer: {
        marginVertical: 54
    },
    title: {
        color: colors.black,
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
    },
    innerTitle: {
        color: colors.primaryOrange,
        textDecorationLine: 'underline'
    },
    signIn: {
        color: colors.primaryBlue,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 30
    }
});