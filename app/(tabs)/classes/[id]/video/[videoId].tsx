import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { WebView } from 'react-native-webview';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function VideoPlayer() {
  const { videoId } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeIn.duration(1000)} style={styles.videoContainer}>
        <WebView
          style={styles.video}
          source={{ uri: 'https://www.youtube.com/embed/example1' }}
          allowsFullscreenVideo
        />
      </Animated.View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Video Title</Text>
        <Text style={styles.description}>
          This is a detailed description of the video content. It explains what topics will be covered
          and what students will learn from this lesson.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  videoContainer: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 9) / 16,
    backgroundColor: '#000000',
  },
  video: {
    flex: 1,
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#333333',
    marginBottom: 12,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
  },
});