import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import MetaCard from '../components/MetaCard';

type RootStackParamList = {
  Dashboard: undefined;
  CreateGoal: undefined;
  GoalDetail: { goal: { id: string; title: string; progress: number } };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

const dummyGoals = [
  { id: '1', title: 'Correr 5km', progress: 40 },
  { id: '2', title: 'Aprender React Native', progress: 60 },
];

export default function DashboardScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Minhas Metas</Text>
      <FlatList
        data={dummyGoals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MetaCard goal={item} onPress={() => navigation.navigate('GoalDetail', { goal: item })} />
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateGoal')}>
        <Text style={styles.buttonText}>Criar Nova Meta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: { marginTop: 20, padding: 15, backgroundColor: '#4B7BEC', borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
