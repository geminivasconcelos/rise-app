import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rise</Text>
      <Text style={styles.subtitle}>Alcance suas metas!</Text>
      <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.button}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff' },
  title: { fontSize: 48, fontWeight: 'bold', color: '#4B7BEC' },
  subtitle: { fontSize: 18, marginTop:10 },
  button: { marginTop: 30, padding: 15, backgroundColor:'#4B7BEC', borderRadius:10 },
  buttonText: { color:'#fff', fontSize:16, fontWeight:'bold' }
});
