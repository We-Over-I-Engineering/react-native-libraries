import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface RectangleButtonProps {
  width?: number
  height?: number
  backgroundColor?: string
  borderColor?: string
  borderWidth?: number
  borderRadius?:number
  text?: string
  textColor?: string
  textSize?: number
  textWeight?: any
  textTransform?: any
  prefixIcon?: string
  suffixIcon?: string
  onPress?: Function
  isDisabled?: boolean
}

function RectangleButton(props: RectangleButtonProps) {
  const { width, height, backgroundColor, borderColor, borderWidth, text, textColor, textSize, textWeight, textTransform, prefixIcon, suffixIcon, onPress, isDisabled, borderRadius } = props
  return (
    // Rectangle Button
    <TouchableOpacity
      disabled={isDisabled}
      style={[styles.button, { width, height, backgroundColor: isDisabled ? '#D9D9D9' : backgroundColor, borderColor: isDisabled ? 'none' : borderColor, borderWidth,  borderRadius: borderRadius ? borderRadius : 0, }]}
      onPress={() => onPress ? onPress() : null}
    >
      {/* Button View */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', padding: 10 }}>
        {/* Prefix Icon */}
        {prefixIcon ? <Image source={{ uri: prefixIcon, headers: { accept: '*/*' } }} style={[styles.icon]} /> : null}
        {/* Button Text */}
        <Text style={[styles.text, { color: textColor, fontSize: textSize, fontWeight: textWeight, textTransform }]}>{text}</Text>
        {/* Suffix Icon */}
        {suffixIcon ? <Image source={{ uri: suffixIcon, headers: { accept: '*/*' } }} style={[styles.icon]} /> : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginHorizontal: 12
  },
  icon: {
    height: 32,
    width: 32,
    borderRadius: 50
  }
});

export default RectangleButton;