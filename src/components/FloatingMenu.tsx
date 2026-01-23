import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");

export default function FloatingMenu({ items, centerAction }: any) {
  // Ajustes de proporção para o "buraco" perfeito
  const line = width;
  const rectWidth = 90; // largura do buraco
  
// O segredo está nestas coordenadas:
  // M0,20 -> Começa e faz o arredondado da ponta esquerda
  // H... -> Linha reta até o início do corte
  // C... -> Curva de Bézier cúbica para fazer o movimento orgânico (suave)
  const d = `
    M0 20 
    Q0 0 20 0 
    H${(width - rectWidth) / 2 - 10}
    C${(width - rectWidth) / 2 + 5} 0 ${(width - rectWidth) / 2} 50 ${width / 2} 50
    C${(width + rectWidth) / 2} 50 ${(width + rectWidth) / 2 - 5} 0 ${(width + rectWidth) / 2 + 10} 0
    H${width - 20}
    Q${width} 0 ${width} 20
    V80
    H0
    Z
  `;

  return (
    <View style={styles.container}>
      {/* O SVG desenha o shape escuro com o corte suave */}
      <View style={styles.svgWrapper}>
        <Svg width={width} height={80} viewBox={`0 0 ${width} 80`}>
          <Path d={d} fill="#fcfcfc" /> 
        </Svg>
      </View>

      <View style={styles.content}>
        {/* Itens da Esquerda */}
        <View style={styles.section}>
          {items.slice(0, 2).map((item: any, index: number) => (
            <TouchableOpacity key={index} style={styles.tab} onPress={item.onPress}>
              {item.icon}
              <Text style={styles.label}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Espaço central do corte */}
        <View style={styles.centerGap} />

        {/* Itens da Direita */}
        <View style={styles.section}>
          {items.slice(2, 4).map((item: any, index: number) => (
            <TouchableOpacity key={index} style={styles.tab} onPress={item.onPress}>
              {item.icon}
              <Text style={styles.label}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Botão FAB azul */}
      <TouchableOpacity style={styles.fab} onPress={centerAction.onPress}>
        <View style={styles.fabInner}>
          <Text style={styles.plus}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 70,
    backgroundColor: 'transparent',
    elevation: 16, // Android
    shadowColor: '#f81b1b', // iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
  },
  svgWrapper: {
    ...StyleSheet.absoluteFillObject,
    pointerEvents: 'none',
    elevation: 10,
    shadowColor: "#afbcef",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 0, 
    elevation: 20,
  },
  centerGap: {
    width: 80, // Deve ser igual ao rectWidth da conta do SVG
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 10,
    color: '#555',
    marginTop: 4,
  },
  fab: {
    position: 'absolute',
    top: -15, // Encaixa no buraco da curva
    left: width / 2 - 28,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: "#3498db",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  fabInner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    color: 'white',
    fontSize: 28,
    fontWeight: '300',
  },
});