import { createHomeStyles } from '@/assets/styles/home.styles';
import useTheme from '@/hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Index = () => {
  const { toggleDarkMode, colors } = useTheme();

  const homeStyles = createHomeStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeArea}>
        <Text>HI</Text>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>toggle the mode</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default Index;
