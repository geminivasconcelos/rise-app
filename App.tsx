import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import CreateGoalScreen from './screens/CreateGoalScreen';
// import GoalDetailScreen from './screens/GoalDetailScreen';
// import GroupsScreen from './screens/GroupsScreen';
// import ProfileScreen from './screens/ProfileScreen';

import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
} from '@expo-google-fonts/nunito';
import DashboardScreen from './src/screens/DashboardScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import SplashScreen from './src/screens/SplashScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import { GestureHandlerRootView } from "react-native-gesture-handler"

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
  Dashboard: undefined;
  Notifications: undefined;
  CreateGoal: undefined;
  GoalDetail: { goal: { id: string; title: string; progress: number } };
  Groups: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  // 👈 useFonts deve estar dentro do componente
  const [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
  });

  if (!fontsLoaded) {
    return null; // ou um splash/loading
  }

  return (
    
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        {/* <Stack.Screen name="CreateGoal" component={CreateGoalScreen} />
        <Stack.Screen name="GoalDetail" component={GoalDetailScreen} />
        <Stack.Screen name="Groups" component={GroupsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
