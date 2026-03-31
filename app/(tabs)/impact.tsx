import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';

const MOCK_IMPACT = [
  { id: '1', promise: '400.000 neue Wohnungen pro Jahr', politician: 'Klara Geywitz (SPD)', progress: 35, status: 'in_progress' as const },
  { id: '2', promise: 'Deutschlandticket dauerhaft bei 49€', politician: 'Volker Wissing (FDP)', progress: 80, status: 'in_progress' as const },
  { id: '3', promise: 'Kohleausstieg bis 2030', politician: 'Robert Habeck (Grüne)', progress: 55, status: 'in_progress' as const },
];

function getProgressColor(progress: number) {
  if (progress >= 70) return '#22C55E';
  if (progress >= 40) return '#F59E0B';
  return '#EF4444';
}

export default function ImpactScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Impact-Tracker</Text>
      <Text style={styles.subtitle}>Versprochen vs. Umgesetzt</Text>

      {MOCK_IMPACT.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.promise}>{item.promise}</Text>
          <Text style={styles.politician}>{item.politician}</Text>
          <View style={styles.progressBg}>
            <View style={[styles.progressBar, { width: `${item.progress}%`, backgroundColor: getProgressColor(item.progress) }]} />
          </View>
          <Text style={styles.progressText}>{item.progress}% umgesetzt</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 28, fontWeight: 'bold', paddingTop: 8 },
  subtitle: { fontSize: 14, color: '#6B7280', marginTop: 4, marginBottom: 24 },
  card: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  promise: { fontSize: 16, fontWeight: '700' },
  politician: { fontSize: 13, color: '#6B7280', marginTop: 4, marginBottom: 12 },
  progressBg: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: { height: 8, borderRadius: 4 },
  progressText: { fontSize: 12, color: '#6B7280', marginTop: 6, textAlign: 'right' },
});
