import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Play } from 'lucide-react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const videos = {
  mathematics: [
    { id: 1, title: 'Introduction to Algebra', duration: '15:30', url: 'https://www.youtube.com/watch?v=example1' },
    { id: 2, title: 'Linear Equations', duration: '20:45', url: 'https://www.youtube.com/watch?v=example2' },
    { id: 3, title: 'Quadratic Equations', duration: '18:20', url: 'https://www.youtube.com/watch?v=example3' },
  ],
  science: [
    { id: 1, title: 'Cell Structure', duration: '22:15', url: 'https://www.youtube.com/watch?v=example4' },
    { id: 2, title: 'Chemical Reactions', duration: '19:30', url: 'https://www.youtube.com/watch?v=example5' },
    { id: 3, title: 'Force and Motion', duration: '25:10', url: 'https://www.youtube.com/watch?v=example6' },
  ],
};

export default function SubjectVideos() {
  const { id, subject } = useLocalSearchParams();

  const subjectVideos = videos[subject as keyof typeof videos] || [];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{subject} Videos</Text>
      <Text style={styles.subHeader}>Class {id}</Text>

      <View style={styles.videoList}>
        {subjectVideos.map((video, index) => (
          <Animated.View
            key={video.id}
            entering={FadeInUp.delay(index * 100).duration(1000)}
          >
            <Pressable
              style={styles.videoCard}
              onPress={() => router.push(`/classes/${id}/video/${video.id}`)}>
              <View style={styles.videoInfo}>
                <Text style={styles.videoTitle}>{video.title}</Text>
                <Text style={styles.videoDuration}>{video.duration}</Text>
              </View>
              <Play size={24} color="#FF6B35" />
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
  header: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#333333',
    marginTop: 60,
  },
  subHeader: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#666666',
    marginTop: 4,
    marginBottom: 24,
  },
  videoList: {
    gap: 16,
  },
  videoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFF5EE',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B35',
  },
  videoInfo: {
    flex: 1,
    marginRight: 16,
  },
  videoTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333333',
  },
  videoDuration: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
});