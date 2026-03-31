import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const MOCK_PULSE = [
  { id: '1', title: 'Bundestag stimmt über Mietpreisbremse ab', category: 'Wohnen', time: 'vor 2h' },
  { id: '2', title: 'Neue Klimaziele: Was die Parteien planen', category: 'Klima', time: 'vor 4h' },
  { id: '3', title: 'Digitalisierung an Schulen: Fortschritt oder Stillstand?', category: 'Bildung', time: 'vor 6h' },
];

export default function PulseFeedScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Democra</Text>
        <Text style={styles.subtitle}>Dein täglicher Puls der Demokratie</Text>
      </View>

      {/* Solution Button */}
      <View style={styles.frustButton}>
        <FontAwesome name="bolt" size={20} color="#fff" />
        <Text style={styles.frustButtonText}>Das nervt mich gerade!</Text>
      </View>

      {/* Daily Pulse Feed */}
      <Text style={styles.sectionTitle}>Daily Pulse</Text>
      {MOCK_PULSE.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardCategory}>{item.category}</Text>
            <Text style={styles.cardTime}>{item.time}</Text>
          </View>
          <Text style={styles.cardTitle}>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { marginBottom: 24, paddingTop: 8 },
  logo: { fontSize: 32, fontWeight: 'bold', color: '#2563EB' },
  subtitle: { fontSize: 14, color: '#6B7280', marginTop: 4 },
  frustButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#EF4444',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  frustButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  card: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  cardCategory: { fontSize: 12, fontWeight: '600', color: '#2563EB' },
  cardTime: { fontSize: 12, color: '#9CA3AF' },
  cardTitle: { fontSize: 16, fontWeight: '600' },
});
