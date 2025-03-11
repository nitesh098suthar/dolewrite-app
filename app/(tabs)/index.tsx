import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import { router } from 'expo-router';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

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
      {/* Logo and Branding */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/index/logo.png')}
          style={styles.logo}
        />

        <MaskedView
          maskElement={<Text style={styles.brandName}>DOLEWRITE</Text>}
        >
          <LinearGradient
            colors={['#FF512F', '#DD2476']} // Adjust gradient colors
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          />
        </MaskedView>
      </View>

      {/* Welcome Section */}
      <Animated.View
        entering={FadeInDown.delay(200).duration(1000)}
        style={styles.header}
      >
        <Text style={styles.welcomeText}>
          Welcome to the{' '}
          <MaskedView
            maskElement={<Text style={styles.gradientText}>Dolewrite</Text>}
          >
            <LinearGradient
              colors={['#F8AD30', '#EE3425']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={[styles.gradientText, { opacity: 0 }]}>
                Dolewrite !
              </Text>
            </LinearGradient>
          </MaskedView>
        </Text>
        <Text style={styles.description}>
          Dolewrite is your ultimate learning companion. Explore our courses and
          enhance your knowledge.
        </Text>
        <Pressable style={styles.startButton} onPress={() => router.push('/')}>
          <Text style={styles.buttonText}>Explore Courses</Text>
        </Pressable>

        {/* Additional Paragraphs */}
        <View style={styles.extraTextContainer}>
          <Text style={styles.extraText}>
            Learn from top educators and become an expert in your field.
          </Text>
          <Text style={styles.extraText}>
            Join thousands of students on a journey of knowledge.
          </Text>
        </View>

        {/* Super Kid Image */}
        <Image
          source={require('../../assets/index/super-kid.png')}
          style={styles.superKidImage}
        />
      </Animated.View>

      {/* Featured Courses */}
      <Animated.View
        entering={FadeInUp.delay(400).duration(1000)}
        style={styles.section}
      >
        <Text style={styles.sectionTitle}>Featured Courses</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredCourses.map((course) => (
            <Pressable
              key={course.id}
              style={styles.courseCard}
              onPress={() => router.push('/classes')}
            >
              <Image
                source={{ uri: course.image }}
                style={styles.courseImage}
              />
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  logoContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  logo: {
    width: 50,  
    height: 50, 
    marginRight: 10, 
  },
  brandName: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gradient: {
    flex: 1,
    height: 40, 
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF5EE',
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#333333',
    textAlign: 'center',
  },
  gradientText: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#F97316',
    textAlign: 'center',
    marginVertical: 10,
  },
  startButton: {
    backgroundColor: '#FF6B35',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#ffffff',
  },
  extraTextContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  extraText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#666666',
    textAlign: 'center',
    marginTop: 5,
  },
  superKidImage: {
    width: 150,
    height: 150,
    marginTop: 15,
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
});
