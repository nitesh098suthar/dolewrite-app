import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const classes = [
  { id: 1, name: 'Nursery', subjects: ['English', 'Mathematics'], image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500' },
  { id: 2, name: 'Class 1', subjects: ['English', 'Mathematics', 'EVS'], image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500' },
  { id: 3, name: 'Class 2', subjects: ['English', 'Mathematics', 'EVS'], image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500' },
  { id: 4, name: 'Class 3', subjects: ['English', 'Mathematics', 'Science', 'Social Studies'], image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500' },
  { id: 5, name: 'Class 4', subjects: ['English', 'Mathematics', 'Science', 'Social Studies'], image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500' },
  { id: 6, name: 'Class 5', subjects: ['English', 'Mathematics', 'Science', 'Social Studies'], image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500' },
  { id: 7, name: 'Class 6', subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi'], image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500' },
  { id: 8, name: 'Class 7', subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi'], image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500' },
  { id: 9, name: 'Class 8', subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi'], image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500' },
];

export default function ClassesScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.headerText}>All Classes</Text>
      <Text style={styles.subHeaderText}>Choose your class to start learning</Text>

      <View style={styles.classesGrid}>
        {classes.map((classItem, index) => (
          <Animated.View
            key={classItem.id}
            entering={FadeInUp.delay(index * 100).duration(1000)}
            style={styles.classCard}>
            <Image source={{ uri: classItem.image }} style={styles.classImage} />
            <View style={styles.classInfo}>
              <Text style={styles.className}>{classItem.name}</Text>
              <Text style={styles.subjectsCount}>{classItem.subjects.length} Subjects</Text>
            </View>
          </Animated.View>
        ))}
      </View>
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
  },
  subHeaderText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
    marginBottom: 24,
  },
  classesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  classCard: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  classImage: {
    width: '100%',
    height: 120,
  },
  classInfo: {
    padding: 12,
  },
  className: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1e293b',
  },
  subjectsCount: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
});