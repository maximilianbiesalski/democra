import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const DAILY_QUIZ = {
  question: 'Welches Land hat 2026 den EU-Ratsvorsitz?',
  options: ['Deutschland', 'Polen', 'Frankreich', 'Italien'],
  correctIndex: 1,
  explanation: 'Polen hat seit dem 1. Januar 2026 den Vorsitz im Rat der Europäischen Union inne.',
  category: 'EU & Internationales',
  xpReward: 20,
};

type QuizState = 'playing' | 'correct' | 'wrong';

export default function QuizScreen() {
  const [state, setState] = useState<QuizState>('playing');
  const [selected, setSelected] = useState<number | null>(null);
  const [streak, setStreak] = useState(7); // mock streak

  const handleAnswer = (index: number) => {
    if (state !== 'playing') return;
    setSelected(index);
    if (index === DAILY_QUIZ.correctIndex) {
      setState('correct');
      setStreak((s) => s + 1);
    } else {
      setState('wrong');
    }
  };

  return (
    <View style={styles.container}>
      {/* Streak Banner */}
      <View style={styles.streakBanner}>
        <FontAwesome name="fire" size={20} color="#F59E0B" />
        <Text style={styles.streakText}>{streak} Tage Streak</Text>
      </View>

      <Text style={styles.title}>Daily Quiz</Text>
      <Text style={styles.subtitle}>Jeden Tag eine neue Frage — halte deinen Streak!</Text>

      {/* Question Card */}
      <View style={styles.questionCard}>
        <Text style={styles.category}>{DAILY_QUIZ.category}</Text>
        <Text style={styles.question}>{DAILY_QUIZ.question}</Text>
      </View>

      {/* Answer Options */}
      {DAILY_QUIZ.options.map((option, index) => {
        let buttonStyle = styles.option;
        let textStyle = styles.optionText;

        if (state !== 'playing' && index === DAILY_QUIZ.correctIndex) {
          buttonStyle = { ...styles.option, ...styles.optionCorrect };
          textStyle = { ...styles.optionText, color: '#fff' };
        } else if (state === 'wrong' && index === selected) {
          buttonStyle = { ...styles.option, ...styles.optionWrong };
          textStyle = { ...styles.optionText, color: '#fff' };
        }

        return (
          <TouchableOpacity
            key={index}
            style={buttonStyle}
            onPress={() => handleAnswer(index)}
            activeOpacity={0.7}
          >
            <Text style={textStyle}>{option}</Text>
          </TouchableOpacity>
        );
      })}

      {/* Result */}
      {state !== 'playing' && (
        <View style={styles.resultCard}>
          <FontAwesome
            name={state === 'correct' ? 'check-circle' : 'times-circle'}
            size={32}
            color={state === 'correct' ? '#22C55E' : '#EF4444'}
          />
          <Text style={styles.resultTitle}>
            {state === 'correct' ? `Richtig! +${DAILY_QUIZ.xpReward} XP` : 'Leider falsch!'}
          </Text>
          <Text style={styles.explanation}>{DAILY_QUIZ.explanation}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 8 },
  streakBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
  },
  streakText: { fontSize: 16, fontWeight: '700', color: '#92400E' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#6B7280', textAlign: 'center', marginTop: 4, marginBottom: 24 },
  questionCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#2563EB',
  },
  category: { fontSize: 12, fontWeight: '600', color: '#2563EB', marginBottom: 8 },
  question: { fontSize: 20, fontWeight: '600', lineHeight: 28 },
  option: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  optionCorrect: { backgroundColor: '#22C55E', borderColor: '#16A34A' },
  optionWrong: { backgroundColor: '#EF4444', borderColor: '#DC2626' },
  optionText: { fontSize: 16, fontWeight: '500', textAlign: 'center' },
  resultCard: {
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
  },
  resultTitle: { fontSize: 18, fontWeight: '700', marginTop: 8 },
  explanation: { fontSize: 14, color: '#6B7280', textAlign: 'center', marginTop: 8, lineHeight: 20 },
});
