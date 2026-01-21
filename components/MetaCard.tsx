import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type MetaCardProps = {
  goal: {
    id: string;
    title: string;
    progress: number;
  };
  onPress: () => void;
};

export default function MetaCard({ goal, onPress }: MetaCardProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{goal.title}</Text>
      <Text>Progresso: {goal.progress}%</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, borderRadius: 10, backgroundColor: '#f1f1f1', marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 }
});
