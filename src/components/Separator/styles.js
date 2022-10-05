import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 15
    },
    line: {
      backgroundColor: '#DADADA',
      height: 1,
      flex: 1, // take up as much space as you can
    },
    text: {
      color: colors.primaryBlue,
      fontWeight: '600',
      paddingHorizontal: 10
    }
});