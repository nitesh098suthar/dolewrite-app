import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Settings, BookOpen, Heart, LogOut } from 'lucide-react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInDown.delay(200).duration(1000)} style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(400).duration(1000)} style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <Pressable style={styles.menuItem}>
          <Settings size={24} color="#6366f1" />
          <Text style={styles.menuText}>Settings</Text>
        </Pressable>
        <Pressable style={styles.menuItem}>
          <BookOpen size={24} color="#6366f1" />
          <Text style={styles.menuText}>My Classes</Text>
        </Pressable>
        <Pressable style={styles.menuItem}>
          <Heart size={24} color="#6366f1" />
          <Text style={styles.menuText}>Favorites</Text>
        </Pressable>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(600).duration(1000)} style={[styles.section, styles.logout]}>
        <Pressable style={styles.logoutButton}>
          <LogOut size={24} color="#ef4444" />
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 32,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#1e293b',
  },
  email: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1e293b',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    marginBottom: 12,
  },
  menuText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#1e293b',
    marginLeft: 12,
  },
  logout: {
    marginTop: 'auto',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fef2f2',
    borderRadius: 12,
  },
  logoutText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#ef4444',
    marginLeft: 12,
  },
});