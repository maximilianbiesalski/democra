import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <FontAwesome name="user-circle" size={80} color="#2563EB" />
      </View>
      <Text style={styles.name}>Demo-Nutzer</Text>
      <Text style={styles.level}>Level 3 · Demokratie-Entdecker</Text>

      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>7</Text>
          <Text style={styles.statLabel}>Tage-Streak</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>240</Text>
          <Text style={styles.statLabel}>XP</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Matches</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Deine Top-Themen</Text>
        <Text style={styles.tag}>🏠 Wohnen</Text>
        <Text style={styles.tag}>🌱 Klima</Text>
        <Text style={styles.tag}>💻 Digitales</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: 'center', paddingTop: 48 },
  avatar: { marginBottom: 16 },
  name: { fontSize: 24, fontWeight: 'bold' },
  level: { fontSize: 14, color: '#6B7280', marginTop: 4 },
  statsRow: { flexDirection: 'row', gap: 32, marginTop: 32, marginBottom: 32 },
  stat: { alignItems: 'center' },
  statValue: { fontSize: 28, fontWeight: 'bold', color: '#2563EB' },
  statLabel: { fontSize: 12, color: '#6B7280', marginTop: 4 },
  section: { width: '100%', marginTop: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  tag: { fontSize: 16, padding: 8, backgroundColor: '#F3F4F6', borderRadius: 8, marginBottom: 8, overflow: 'hidden' },
});
