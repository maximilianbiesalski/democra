import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const MOCK_PULSE = [
  { id: '1', title: 'Bundestag stimmt über Mietpreisbremse ab', category: 'Wohnen', time: 'vor 2h' },
  { id: '2', title: 'Neue Klimaziele: Was die Parteien planen', category: 'Klima', time: 'vor 4h' },
  { id: '3', title: 'Digitalisierung an Schulen: Fortschritt oder Stillstand?', category: 'Bildung', time: 'vor 6h' },
];

const WEEKLY_RECAP = {
  matches: 5,
  quizStreak: 7,
  impactUpdates: 3,
  topTopic: 'Wohnen',
};

export default function PulseFeedScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Democra</Text>
        <Text style={styles.subtitle}>Dein täglicher Puls der Demokratie</Text>
      </View>

      {/* Streak + Quiz CTA */}
      <Link href="/(tabs)/quiz" asChild>
        <TouchableOpacity style={styles.quizBanner} activeOpacity={0.8}>
          <FontAwesome name="fire" size={20} color="#F59E0B" />
          <Text style={styles.quizBannerText}>7 Tage Streak — Tägliches Quiz spielen!</Text>
          <FontAwesome name="chevron-right" size={14} color="#92400E" />
        </TouchableOpacity>
      </Link>

      {/* Weekly Recap Card */}
      <View style={styles.recapCard}>
        <Text style={styles.recapTitle}>Dein Wochen-Recap</Text>
        <View style={styles.recapRow}>
          <View style={styles.recapStat}>
            <Text style={styles.recapValue}>{WEEKLY_RECAP.matches}</Text>
            <Text style={styles.recapLabel}>Matches</Text>
          </View>
          <View style={styles.recapStat}>
            <Text style={styles.recapValue}>{WEEKLY_RECAP.quizStreak}🔥</Text>
            <Text style={styles.recapLabel}>Streak</Text>
          </View>
          <View style={styles.recapStat}>
            <Text style={styles.recapValue}>{WEEKLY_RECAP.impactUpdates}</Text>
            <Text style={styles.recapLabel}>Impact-News</Text>
          </View>
        </View>
        <Text style={styles.recapHighlight}>Top-Thema diese Woche: {WEEKLY_RECAP.topTopic}</Text>
      </View>

      {/* Solution Button */}
      <TouchableOpacity style={styles.frustButton} activeOpacity={0.8}>
        <FontAwesome name="bolt" size={20} color="#fff" />
        <Text style={styles.frustButtonText}>Das nervt mich gerade!</Text>
      </TouchableOpacity>

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
  quizBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
  },
  quizBannerText: { fontSize: 14, fontWeight: '700', color: '#92400E', flex: 1 },
  recapCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  recapTitle: { fontSize: 16, fontWeight: '700', color: '#1E40AF', marginBottom: 12 },
  recapRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 },
  recapStat: { alignItems: 'center' },
  recapValue: { fontSize: 22, fontWeight: 'bold', color: '#2563EB' },
  recapLabel: { fontSize: 11, color: '#6B7280', marginTop: 2 },
  recapHighlight: { fontSize: 13, color: '#1E40AF', textAlign: 'center', fontWeight: '500' },
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
