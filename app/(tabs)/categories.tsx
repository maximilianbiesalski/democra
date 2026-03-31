import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { CATEGORIES } from '@/constants/categories';

export default function CategoriesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Themen</Text>
      <Text style={styles.subtitle}>Was beschäftigt dich? Erfahre, wo jede Partei steht.</Text>

      <View style={styles.grid}>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity key={cat.id} style={styles.tile} activeOpacity={0.7}>
            <FontAwesome name={cat.icon as any} size={28} color="#2563EB" />
            <Text style={styles.tileLabel}>{cat.label}</Text>
            <Text style={styles.tileDesc} numberOfLines={2}>{cat.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 28, fontWeight: 'bold', paddingTop: 8 },
  subtitle: { fontSize: 14, color: '#6B7280', marginTop: 4, marginBottom: 24 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  tile: {
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    padding: 16,
    width: '47%',
    minHeight: 120,
  },
  tileLabel: { fontSize: 16, fontWeight: '700', marginTop: 8 },
  tileDesc: { fontSize: 12, color: '#6B7280', marginTop: 4 },
});
