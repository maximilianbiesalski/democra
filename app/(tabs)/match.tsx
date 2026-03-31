import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const MOCK_QUESTION = {
  text: 'Deutschland sollte mehr in erneuerbare Energien investieren, auch wenn das kurzfristig höhere Strompreise bedeutet.',
  category: 'Klima & Energie',
};

export default function MatchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Match-Maker</Text>
      <Text style={styles.subtitle}>Swipe dich durch aktuelle Themen</Text>

      <View style={styles.questionCard}>
        <Text style={styles.questionCategory}>{MOCK_QUESTION.category}</Text>
        <Text style={styles.questionText}>{MOCK_QUESTION.text}</Text>
      </View>

      <View style={styles.actions}>
        <View style={[styles.actionButton, { backgroundColor: '#FEE2E2' }]}>
          <FontAwesome name="thumbs-down" size={28} color="#EF4444" />
          <Text style={styles.actionLabel}>Dagegen</Text>
        </View>
        <View style={[styles.actionButton, { backgroundColor: '#F3F4F6' }]}>
          <FontAwesome name="minus" size={28} color="#6B7280" />
          <Text style={styles.actionLabel}>Neutral</Text>
        </View>
        <View style={[styles.actionButton, { backgroundColor: '#DCFCE7' }]}>
          <FontAwesome name="thumbs-up" size={28} color="#22C55E" />
          <Text style={styles.actionLabel}>Dafür</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#6B7280', textAlign: 'center', marginTop: 4, marginBottom: 32 },
  questionCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    borderWidth: 2,
    borderColor: '#2563EB',
  },
  questionCategory: { fontSize: 12, fontWeight: '600', color: '#2563EB', marginBottom: 12 },
  questionText: { fontSize: 18, fontWeight: '500', lineHeight: 26 },
  actions: { flexDirection: 'row', justifyContent: 'space-around' },
  actionButton: { alignItems: 'center', padding: 16, borderRadius: 16, width: 100 },
  actionLabel: { fontSize: 12, fontWeight: '600', marginTop: 8 },
});
