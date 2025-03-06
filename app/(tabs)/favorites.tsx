import { View, Text, StyleSheet, Image } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Favorites</Text>
      
      <Animated.View entering={FadeIn.delay(200).duration(1000)} style={styles.emptyState}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500' }}
          style={styles.emptyStateImage}
        />
        <Text style={styles.emptyStateTitle}>No favorites yet</Text>
        <Text style={styles.emptyStateText}>
          Start adding your favorite classes and subjects to access them quickly!
        </Text>
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
  headerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#1e293b',
    marginTop: 60,
    marginBottom: 24,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  emptyStateImage: {
    width: 200,
    height: 200,
    marginBottom: 24,
    borderRadius: 100,
  },
  emptyStateTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyStateText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
  },
});