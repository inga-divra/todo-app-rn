import useTheme, { ColorScheme } from '@/hooks/useTheme';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export const Index = () => {
  const { toggleDarkMode, colors } = useTheme();

  const styles = createStyles(colors);
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Edit app/index.tsx to edit this screen123.
      </Text>
      <Text>HI</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle the mode</Text>
      </TouchableOpacity>
    </View>
  );
};

//STYLES

const createStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      backgroundColor: colors.bg,
    },
    content: { fontSize: 20 },
  });
  return styles;
};
