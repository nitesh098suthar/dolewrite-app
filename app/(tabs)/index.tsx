import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import { router } from 'expo-router';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';

const featuredCourses = [
  {
    id: 1,
    name: 'Mathematics Class 8',
    teacher: 'Sarah Johnson',
    rating: '4.8',
    students: '2.5k',
    image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=500',
  },
  {
    id: 2,
    name: 'Science Class 7',
    teacher: 'Michael Brown',
    rating: '4.9',
    students: '1.8k',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500',
  },
];

const statistics = [
  { id: 1, value: '45k+', label: 'Active Students' },
  { id: 2, value: '1k+', label: 'Expert Teachers' },
  { id: 3, value: '42k+', label: 'Video Courses' },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <Animated.View entering={FadeInDown.delay(200).duration(1000)} style={styles.header}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome to the</Text>
          <Text style={styles.appName}>EDUMATE!</Text>
        </View>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1595376742185-4e6f7e95b3f7?w=500' }}
          style={styles.headerImage}
        />
      </Animated.View>

      {/* Featured Courses */}
      <Animated.View entering={FadeInUp.delay(400).duration(1000)} style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Courses</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredCourses.map((course) => (
            <Pressable
              key={course.id}
              style={styles.courseCard}
              onPress={() => router.push('/classes')}>
              <Image source={{ uri: course.image }} style={styles.courseImage} />
              <View style={styles.courseInfo}>
                <Text style={styles.courseName}>{course.name}</Text>
                <Text style={styles.teacherName}>{course.teacher}</Text>
                <View style={styles.courseStats}>
                  <Text style={styles.rating}>⭐️ {course.rating}</Text>
                  <Text style={styles.students}>👥 {course.students}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </Animated.View>

      {/* Statistics */}
      <Animated.View entering={FadeInUp.delay(600).duration(1000)} style={styles.statsContainer}>
        {statistics.map((stat) => (
          <View key={stat.id} style={styles.statItem}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </Animated.View>

      {/* About Section */}
      <Animated.View entering={FadeInUp.delay(800).duration(1000)} style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>About Us</Text>
        <Text style={styles.aboutText}>
          We provide high-quality education through our innovative learning platform. Our expert teachers ensure that every student receives personalized attention and guidance.
        </Text>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#FFF5EE',
  },
  welcomeContainer: {
    marginBottom: 20,
  },
  welcomeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#666666',
  },
  appName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: '#FF6B35',
    marginTop: 4,
  },
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginTop: 20,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#333333',
    marginBottom: 16,
  },
  courseCard: {
    width: 280,
    marginRight: 16,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    overflow: 'hidden',
  },
  courseImage: {
    width: '100%',
    height: 160,
  },
  courseInfo: {
    padding: 16,
  },
  courseName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333333',
  },
  teacherName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  courseStats: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 16,
  },
  rating: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#FF6B35',
  },
  students: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#FFF5EE',
    marginHorizontal: 20,
    borderRadius: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#FF6B35',
  },
  statLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  aboutSection: {
    padding: 20,
    marginTop: 20,
  },
  aboutTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#333333',
    marginBottom: 12,
  },
  aboutText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
  },
});