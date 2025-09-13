import { createHomeStyles } from '@/assets/styles/home.styles';
import useTheme from '@/hooks/useTheme';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Index = () => {
  const { toggleDarkMode, colors } = useTheme();

  const homeStyles = createHomeStyles(colors);
  return (
    <SafeAreaView style={homeStyles.safeArea}>
      <Text>HI</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle the mode</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Index;
