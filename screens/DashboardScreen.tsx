import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MetaCard from "../components/MetaCard";
import FloatingMenu from "../components/FloatingMenu";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

type RootStackParamList = {
  Dashboard: undefined;
  CreateGoal: undefined;
  GoalDetail: { goal: { id: string; title: string; progress: number } };
};

type Props = NativeStackScreenProps<RootStackParamList, "Dashboard">;

const dummyGoals = [
  {
    id: "1",
    title: "Correr 5km",
    progress: 40,
    date: "2024-01-15",
    project: "Fitness",
    status: "InProgress" as const,
  },
  {
    id: "2",
    title: "Aprender React Native",
    progress: 60,
    date: "2024-01-10",
    project: "Development",
    status: "InProgress" as const,
  },
];

export default function DashboardScreen({ navigation }: Props) {
  const menuItems = [
    {
      label: "Home",
      icon: <MaterialIcons name="home" color="#0B3B7C" size={24} />,
      onPress: () => console.log("Home"),
    },
    {
      label: "My Task",
      icon: <MaterialIcons name="assignment" color="#0B3B7C" size={24} />,
      onPress: () => console.log("My Task"),
    },
    {
      label: "Payments",
      icon: <MaterialIcons name="payment" color="#0B3B7C" size={24} />,
      onPress: () => console.log("Groups"),
    },
    {
      label: "Profile",
      icon: <MaterialIcons name="person" color="#0B3B7C" size={24} />,
      onPress: () => console.log("Profile"),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Minhas Metas</Text>
      <FlatList
        data={dummyGoals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MetaCard
            goal={item}
            onPress={() => navigation.navigate("GoalDetail", { goal: item })}
          />
        )}
      />
      {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateGoal')}>
          <Text style={styles.buttonText}>Criar Nova Meta</Text>
        </TouchableOpacity> */}
      <FloatingMenu
        items={menuItems}
        centerAction={{
          label: "Add",
          onPress: () => console.log("Clicou no +"),
        }}
        style={{ left: 0 }} // garante alinhamento à esquerda
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#4B7BEC",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
