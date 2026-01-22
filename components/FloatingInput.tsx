import { View, TextInput, Animated, StyleSheet } from "react-native";
import { useRef, useState } from "react";

export function FloatingInput({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const animated = useRef(new Animated.Value(value ? 1 : 0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(animated, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.label,
          {
            top: animated.interpolate({
              inputRange: [0, 1],
              outputRange: [16, -8],
            }),
            fontSize: animated.interpolate({
              inputRange: [0, 1],
              outputRange: [14, 12],
            }),
            color: isFocused ? "#243B9A" : "#9CA3AF",
          },
        ]}
      >
        {label}
      </Animated.Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "95%",
    marginBottom: 20,
  },
  label: {
    position: "absolute",
    left: 16,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 4,
    zIndex: 1,
    fontFamily: "Nunito_400Regular",
  },
  input: {
    height: 48,
    borderRadius: 7,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    fontSize: 14,
    fontFamily: "Nunito_400Regular",

    borderBottomWidth: 1,
    borderWidth: 1,
    borderColor: "#fafafa",
    shadowColor: "#E6ECFF",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 7,
    elevation: 5,
  },
});
