import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons"; // 👈 se for Expo

import MetaCard from "../../components/MetaCard";
import FloatingMenu from "../../components/FloatingMenu";

type RootStackParamList = {
  Dashboard: undefined;
  Notifications: undefined;
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

const habits = [
  { id: "1", title: "💻 Build in Public", streak: 24, color: "#4B7BEC" },
  { id: "2", title: "📚 Read 10 pages", streak: 5, color: "#22C55E" },
  { id: "3", title: "💪 Workout", streak: 3, color: "#6366F1" },
];

export default function DashboardScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState<"habits" | "tasks">("habits");

  const menuItems = [
    {
      label: "Home",
      icon: <MaterialIcons name="home" color="#092fc8" size={24} />,
      onPress: () => {},
    },
    {
      label: "My Task",
      icon: <MaterialIcons name="assignment" color="#092fc8" size={24} />,
      onPress: () => setActiveTab("tasks"),
    },
     {
      label: "Habits",
      icon: <MaterialIcons name="person" color="#092fc8" size={24} />,
      onPress: () => {},
    },
    {
      label: "Profile",
      icon: <MaterialIcons name="person" color="#092fc8" size={24} />,
      onPress: () => {},
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.headerContainer}>
          <View style={styles.userInfo}>
            <Image
              source={{ uri: "https://i.pravatar.cc/150" }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.welcome}>Bem-vinda 👋</Text>
              <Text style={styles.userName}>Gemini</Text>
            </View>
          </View>

          {/* NOTIFICATION ICON */}
          <View style={styles.headerActions}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
            >
              <MaterialIcons name="notifications" size={26} color="#092fc8" />
            </TouchableOpacity>
          </View>
        </View>

        {/* SUMMARY */}
        <View style={styles.summaryContainer}>
          <View>
            <Text style={styles.date}>Jan 24</Text>
            <Text style={styles.subDate}>Friday</Text>
          </View>

          <View style={styles.summaryItem}>
            <Text style={styles.summaryNumber}>23</Text>
            <Text style={styles.summaryLabel}>Things to do</Text>
          </View>

          <View style={styles.summaryItem}>
            <Text style={styles.summaryNumber}>0</Text>
            <Text style={styles.summaryLabel}>Later</Text>
          </View>
        </View>

        {/* TABS */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "tasks" && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab("tasks")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "tasks" && styles.activeTabText,
              ]}
            >
              Tasks
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "habits" && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab("habits")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "habits" && styles.activeTabText,
              ]}
            >
              Habits
            </Text>
          </TouchableOpacity>
        </View>

        {/* HABITS TAB */}
        {activeTab === "habits" &&
          habits.map((habit) => (
            <View key={habit.id} style={styles.habitCard}>
              <View style={styles.habitHeader}>
                <Text style={styles.habitTitle}>{habit.title}</Text>
                <Text style={styles.habitStreak}>🔥 {habit.streak}</Text>
              </View>

              <View style={styles.habitGrid}>
                {Array.from({ length: 20 }).map((_, i) => (
                  <View
                    key={i}
                    style={[
                      styles.habitDot,
                      {
                        backgroundColor:
                          i < habit.streak ? habit.color : "#E5E7EB",
                      },
                    ]}
                  />
                ))}
              </View>
            </View>
          ))}

        {/* TASKS TAB */}
        {activeTab === "tasks" && (
          <FlatList
            data={dummyGoals}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MetaCard
                goal={item}
                onPress={() =>
                  navigation.navigate("GoalDetail", { goal: item })
                }
              />
            )}
            scrollEnabled={false}
          />
        )}
      </ScrollView>

      {/* FLOATING MENU */}
      <FloatingMenu
        items={menuItems}
        centerAction={{
          label: "Add",
          onPress: () => {},
        }}
        style={{ left: 0 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Nunito_400Regular",
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },

  welcome: {
    fontSize: 12,
    color: "#6B7280",
    fontFamily: "Nunito_400Regular",
  },

  userName: {
    fontSize: 16,
    fontFamily: "Nunito_700Bold",
  },

  headerActions: {
    justifyContent: "center",
  },

  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",

    // Android
    elevation: 3,

    // iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },

  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  date: {
    fontSize: 16,
    fontFamily: "Nunito_700Bold",
  },

  subDate: {
    fontSize: 12,
    color: "#6B7280",
    fontFamily: "Nunito_400Regular",
  },

  summaryItem: {
    alignItems: "center",
  },

  summaryNumber: {
    fontSize: 18,
    fontFamily: "Nunito_700Bold",
  },

  summaryLabel: {
    fontSize: 12,
    color: "#6B7280",
    fontFamily: "Nunito_400Regular",
  },

  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 4,
    marginBottom: 20,
  },

  tabButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  tabText: {
    fontSize: 14,
    color: "#6B7280",
    fontFamily: "Nunito_400Regular",
  },

  activeTabButton: {
    backgroundColor: "#ededed79",
  },

  activeTabText: {
    color: "#132b5d",
    fontFamily: "Nunito_400Regular",
  },

  habitCard: {
    backgroundColor: "#F9FAFB",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },

  habitHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  habitTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  habitStreak: {
    fontSize: 12,
    color: "#6B7280",
  },

  habitGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  habitDot: {
    width: 10,
    height: 10,
    borderRadius: 3,
    margin: 3,
  },
});
