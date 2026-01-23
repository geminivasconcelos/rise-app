import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type MetaCardProps = {
  readonly goal: {
    readonly id: string;
    readonly title: string;
    readonly progress: number;
    readonly date: string;
    readonly project: string;
    readonly status: 'All' | 'Pending' | 'InProgress' | 'Completed';
  };
  readonly onPress: () => void;
};

export default function MetaCard({ goal, onPress }: MetaCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return '#10B981';
      case 'InProgress':
        return '#3B82F6';
      case 'Pending':
        return '#F59E0B';
      default:
        return '#6B7280';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'Completed';
      case 'InProgress':
        return 'In Progress';
      case 'Pending':
        return 'Pending';
      default:
        return 'All';
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={[styles.leftBorder, { backgroundColor: getStatusColor(goal.status) }]} />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{goal.title}</Text>
          <View style={[styles.badge, { backgroundColor: getStatusColor(goal.status) }]}>
            <Text style={styles.badgeText}>{getStatusLabel(goal.status)}</Text>
          </View>
        </View>
        
        <View style={styles.meta}>
          <Text style={styles.metaText}>📅 {goal.date}</Text>
          <Text style={styles.project}>{goal.project}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  leftBorder: {
    width: 4,
  },
  content: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E1E1E',
    fontFamily: 'Nunito_900Black',
    flex: 1,
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginLeft: 8,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Nunito_700Bold',
  },
  meta: {
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#6B7280',
    fontFamily: 'Nunito_400Regular',
  },
  project: {
    fontSize: 12,
    color: '#9CA3AF',
    fontFamily: 'Nunito_400Regular',
  },
});