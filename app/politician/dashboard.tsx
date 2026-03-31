import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TRENDING_TOPICS = [
  { topic: 'Mietpreise', mentions: 1240, trend: 'up' },
  { topic: 'Radwege', mentions: 890, trend: 'up' },
  { topic: 'Bürgergeld', mentions: 720, trend: 'down' },
];

export default function PoliticianDashboard() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Politiker-Dashboard</Text>
      <Text style={styles.subtitle}>KI-gestützte Wähler-Insights</Text>

      {/* Sentiment Overview */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Stimmung in deinem Wahlkreis</Text>
        <View style={styles.sentimentRow}>
          <View style={styles.sentimentItem}>
            <FontAwesome name="smile-o" size={32} color="#22C55E" />
            <Text style={styles.sentimentValue}>42%</Text>
            <Text style={styles.sentimentLabel}>Positiv</Text>
          </View>
          <View style={styles.sentimentItem}>
            <FontAwesome name="meh-o" size={32} color="#F59E0B" />
            <Text style={styles.sentimentValue}>31%</Text>
            <Text style={styles.sentimentLabel}>Neutral</Text>
          </View>
          <View style={styles.sentimentItem}>
            <FontAwesome name="frown-o" size={32} color="#EF4444" />
            <Text style={styles.sentimentValue}>27%</Text>
            <Text style={styles.sentimentLabel}>Negativ</Text>
          </View>
        </View>
      </View>

      {/* Trending Topics */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Trending Themen</Text>
        {TRENDING_TOPICS.map((t) => (
          <View key={t.topic} style={styles.topicRow}>
            <FontAwesome
              name={t.trend === 'up' ? 'arrow-up' : 'arrow-down'}
              size={14}
              color={t.trend === 'up' ? '#22C55E' : '#EF4444'}
            />
            <Text style={styles.topicName}>{t.topic}</Text>
            <Text style={styles.topicMentions}>{t.mentions} Erwähnungen</Text>
          </View>
        ))}
      </View>

      {/* Transparency Score */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Dein Transparenz-Score</Text>
        <Text style={styles.scoreValue}>73 / 100</Text>
        <Text style={styles.scoreTip}>Tipp: Beantworte 3 offene Bürgeranfragen, um +5 Punkte zu erhalten.</Text>
      </View>
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
    marginBottom: 16,
  },
  cardTitle: { fontSize: 16, fontWeight: '700', marginBottom: 12 },
  sentimentRow: { flexDirection: 'row', justifyContent: 'space-around' },
  sentimentItem: { alignItems: 'center' },
  sentimentValue: { fontSize: 20, fontWeight: 'bold', marginTop: 8 },
  sentimentLabel: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  topicRow: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 8 },
  topicName: { fontSize: 15, fontWeight: '600', flex: 1 },
  topicMentions: { fontSize: 12, color: '#6B7280' },
  scoreValue: { fontSize: 36, fontWeight: 'bold', color: '#2563EB', textAlign: 'center', marginBottom: 8 },
  scoreTip: { fontSize: 13, color: '#6B7280', textAlign: 'center' },
});
