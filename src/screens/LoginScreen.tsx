import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FloatingInput } from "../../components/FloatingInput";
import { useState } from "react";
import AppAlert from "../../components/AppAlert";

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Dashboard: undefined;
};

type Props = {
  readonly navigation: NativeStackNavigationProp<RootStackParamList, "Login">;
};

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setAlertMessage("Preencha email e senha.");
      setAlertVisible(true);
      return;
    }

    // simulação de erro
    if (password !== "123456") {
      setAlertMessage("Senha incorreta.");
      setAlertVisible(true);
      return;
    }

    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>rise</Text>

      <View style={styles.containerTitle}>
        <Text style={styles.title}>Login to your Account</Text>
      </View>

      <View style={styles.containerInputs}>
        <FloatingInput label="Email" value={email} onChangeText={setEmail} />
        <FloatingInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <Text style={styles.orLogin}>- or sign in with -</Text>

      <Image
        source={require("../assets/icons/google-logo-48.png")}
        style={styles.iconeGoogle}
      />

      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.linkMsg}>
          Don’t have an account? <Text style={styles.linkBold}>Sign up</Text>
        </Text>
      </TouchableOpacity>

        <AppAlert
        visible={alertVisible}
        message={alertMessage}
        type="error"
        onClose={() => setAlertVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    fontFamily: "Nunito_900Black",
    fontSize: 32,
    fontWeight: "700",
    color: "#243B9A",
    marginBottom: 64,
    textAlign: "center",
  },
  containerTitle: {
    width: "95%",
    paddingLeft: 16,
    marginBottom: 8,
  },
  title: {
    fontFamily: "Nunito_400Regular",
    fontSize: 15,
    marginBottom: 24,
    textAlign: "left",
    color: "#cacaca",
  },
  containerInputs: {
    width: "100%",
    alignItems: "center",
    gap: 20,
  },
  button: {
    width: "80%",
    height: 52,
    // backgroundColor: "#0a153f",
    backgroundColor: "#092fc8",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    elevation: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Nunito_400Regular",
  },
  link: {
    position: "absolute",
    bottom: 40,
    fontSize: 14,
    textAlign: "center",
    color: "#f0f1f1",
    marginTop: 24,
  },
  linkMsg: {
    fontFamily: "Nunito_400Regular",
    fontSize: 14,
    color: "#9f9fa1",
  },
  linkBold: {
    color: "#213caa",
    fontFamily: "Nunito_700Bold",
  },
  orLogin: {
    marginTop: 50,
    textAlign: "center",
    color: "#a4a8b1",
    fontFamily: "Nunito_500Medium",
  },
  iconeGoogle: {
    marginTop: 44,
    width: 32,
    height: 32,
  },
});
