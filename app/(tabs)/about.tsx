import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Phone, Mail, FileText } from 'lucide-react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.headerText}>About Us</Text>

      <Animated.View entering={FadeInUp.delay(200).duration(1000)} style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionText}>
          We are dedicated to making quality education accessible to everyone. Our platform provides comprehensive learning materials for students from Nursery to Class 8, helping them excel in their academic journey.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(400).duration(1000)} style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Pressable style={styles.contactItem}>
          <Phone size={24} color="#6366f1" />
          <Text style={styles.contactText}>+1 234 567 890</Text>
        </Pressable>
        <Pressable style={styles.contactItem}>
          <Mail size={24} color="#6366f1" />
          <Text style={styles.contactText}>support@eduapp.com</Text>
        </Pressable>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(600).duration(1000)} style={styles.section}>
        <Text style={styles.sectionTitle}>Legal</Text>
        <Pressable style={styles.legalItem}>
          <FileText size={20} color="#64748b" />
          <Text style={styles.legalText}>Terms & Conditions</Text>
        </Pressable>
        <Pressable style={styles.legalItem}>
          <FileText size={20} color="#64748b" />
          <Text style={styles.legalText}>Privacy Policy</Text>
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  headerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#1e293b',
    marginTop: 60,
    marginBottom: 24,
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
  sectionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#64748b',
    lineHeight: 24,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
  },
  contactText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#1e293b',
    marginLeft: 12,
  },
  legalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
  },
  legalText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#1e293b',
    marginLeft: 12,
  },
});