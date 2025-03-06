import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import Animated, { FadeInUp } from 'react-native-reanimated';

const classes = [
  {
    id: 1,
    name: 'Nursery',
    subjects: ['English', 'Mathematics'],
  },
  {
    id: 2,
    name: 'Class 1',
    subjects: ['English', 'Mathematics', 'EVS'],
  },
  {
    id: 3,
    name: 'Class 2',
    subjects: ['English', 'Mathematics', 'EVS'],
  },
  {
    id: 4,
    name: 'Class 3',
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies'],
  },
  {
    id: 5,
    name: 'Class 4',
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies'],
  },
  {
    id: 6,
    name: 'Class 5',
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies'],
  },
  {
    id: 7,
    name: 'Class 6',
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi'],
  },
  {
    id: 8,
    name: 'Class 7',
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi'],
  },
  {
    id: 9,
    name: 'Class 8',
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi'],
  },
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
          >
            <Pressable
              style={styles.classCard}
              onPress={() => router.push(`/classes/${classItem.id}`)}>
              <Text style={styles.className}>{classItem.name}</Text>
              <View style={styles.subjectsList}>
                {classItem.subjects.map((subject, idx) => (
                  <Pressable
                    key={idx}
                    style={styles.subjectButton}
                    onPress={() => router.push({
                      pathname: `/classes/${classItem.id}`,
                      params: { subject: subject.toLowerCase() }
                    })}>
                    <Text style={styles.subjectText}>{subject}</Text>
                  </Pressable>
                ))}
              </View>
            </Pressable>
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
    color: '#333333',
    marginTop: 60,
  },
  subHeaderText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#666666',
    marginTop: 4,
    marginBottom: 24,
  },
  classesGrid: {
    gap: 16,
  },
  classCard: {
    backgroundColor: '#FFF5EE',
    borderRadius: 16,
    padding: 20,
  },
  className: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#333333',
    marginBottom: 12,
  },
  subjectsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  subjectButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FF6B35',
  },
  subjectText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#FF6B35',
  },
});