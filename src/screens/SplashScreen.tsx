import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  // add other routes here
};
type Props = {
  readonly navigation: NativeStackNavigationProp<RootStackParamList, "Splash">;
};

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2000); // 2 segundos

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>rise</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#243B9A",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontFamily: 'Nunito_900Black', 
    fontSize: 42,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 2,
  },
});
