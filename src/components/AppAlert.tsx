import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type AppAlertProps = {
  visible: boolean;
  message: string;
  type?: "error" | "success" | "info";
  onClose: () => void;
};

export default function AppAlert({
  visible,
  message,
  type = "info",
  onClose,
}: AppAlertProps) {
  const backgroundColor =
    type === "error"
      ? "#FEE2E2"
      : type === "success"
      ? "#DCFCE7"
      : "#E0F2FE";

  const textColor =
    type === "error"
      ? "#991B1B"
      : type === "success"
      ? "#166534"
      : "#075985";

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={[styles.alertBox, { backgroundColor }]}>
          <Text style={[styles.message, { color: textColor }]}>
            {message}
          </Text>

          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  alertBox: {
    width: "80%",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: "#0a153f",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
