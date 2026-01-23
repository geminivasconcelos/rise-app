import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FloatingInput } from "../../components/FloatingInput";

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Dashboard: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

export default function SignupScreen({ navigation }: Readonly<Props>) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }
    // if (password !== confirmPassword) {
    //   Alert.alert('Erro', 'As senhas não coincidem');
    //   return;
    // }
    navigation.replace("Dashboard");
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>←</Text>
      </TouchableOpacity> */}
      <Text style={styles.appName}>rise</Text>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Create your Account</Text>
      </View>
      <View style={styles.containerInputs}>
        <FloatingInput label="Name" value={name} onChangeText={setName} />
        <FloatingInput label="Email" value={email} onChangeText={setEmail} />

        <FloatingInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {/* <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#999"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      /> */}

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        {/* <View style={styles.divider} /> */}
        <Text style={styles.dividerText}>- or sign up with -</Text>
        {/* <View style={styles.divider} /> */}
      </View>

      <Image
        source={require("../assets/icons/google-logo-48.png")}
        style={styles.iconeGoogle}
      />

      {/* <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>f</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>𝕏</Text>
        </TouchableOpacity> */}
      {/* </View> */}

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.linkText}>Sign in</Text>
        </TouchableOpacity>
      </View>
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
  backButton: {
    fontSize: 24,
    color: "#1F3A93",
    fontWeight: "500",
    marginBottom: 30,
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
    backgroundColor: "#092fc8",
    borderRadius: 7,
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
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 24,
    marginTop: 64,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#d9d9d9",
  },
  dividerText: {
    marginHorizontal: 12,
    color: "#999",
    fontSize: 12,
    fontFamily: "Nunito_400Regular",
  },
  iconeGoogle: {
    marginTop: 44,
    width: 32,
    height: 32,
  },

  footer: {
    bottom: 40,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    color: "#666",
    fontSize: 13,
    fontFamily: "Nunito_400Regular",
  },
  linkText: {
    color: "#213caa",
    fontFamily: "Nunito_700Bold",
    fontSize: 13,
  },
});
