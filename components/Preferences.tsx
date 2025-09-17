import { createSettingsStyles } from '@/assets/styles/settings.style';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Switch, Text, View } from 'react-native';

const Preferences = () => {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);

  const { colors, isDarkMode, toggleDarkMode } = useTheme();

  const settingsStyles = createSettingsStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyles.section}
    >
      <Text style={settingsStyles.sectionTitle}>Preferences</Text>
      {/* DARK MODE VIEW SWITCH */}
      <View style={settingsStyles.settingItem}>
        {/* Icon and Title*/}
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingsStyles.settingIcon}
          >
            <Ionicons name='moon' size={18} color='#fff' />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Dark Mode</Text>
        </View>
        {/* Switch */}
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={'#fff'}
          trackColor={{ false: colors.border, true: colors.primary }}
        />
      </View>
      {/* end of DARK MODE VIEW SWITCH */}
      {/* NOTIFICATION SWITCH */}
      <View style={settingsStyles.settingItem}>
        {/* Icon and Title*/}
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.warning}
            style={settingsStyles.settingIcon}
          >
            <Ionicons name='notifications' size={18} color='#fff' />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Notifications</Text>
        </View>
        {/* Switch */}
        <Switch
          value={isNotificationEnabled}
          onValueChange={() => setIsNotificationEnabled(!isNotificationEnabled)}
          thumbColor={'#fff'}
          trackColor={{ false: colors.border, true: colors.warning }}
        />
      </View>
      {/* end of NOTIFICATION SWITCH */}
      {/* AUTO SYNC */}
      <View style={settingsStyles.settingItem}>
        {/* Icon and Title*/}
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.success}
            style={settingsStyles.settingIcon}
          >
            <Ionicons name='sync' size={18} color='#fff' />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Auto Sync</Text>
        </View>
        {/* Switch */}
        <Switch
          value={isAutoSync}
          onValueChange={() => setIsAutoSync(!isAutoSync)}
          thumbColor={'#fff'}
          trackColor={{ false: colors.border, true: colors.success }}
        />
      </View>
      {/* end of AUTO SYNC */}
    </LinearGradient>
  );
};

export default Preferences;
