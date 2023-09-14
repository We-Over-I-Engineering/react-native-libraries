import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface IconCircleButtonProps {
  size?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  icon?: string;
  onPress?: Function;
  isDisabled?: boolean;
}

function IconCircleButton(props: IconCircleButtonProps) {
  const {
    size,
    backgroundColor,
    borderColor,
    borderWidth,
    icon,
    onPress,
    isDisabled,
  } = props;
  return (
    // Circle Button
    <TouchableOpacity
      disabled={isDisabled}
      style={[
        styles.button,
        {
          width: size,
          height: size,
          borderRadius: size ? size / 2 : 0,
          backgroundColor: isDisabled ? '#D9D9D9' : backgroundColor,
          borderColor: isDisabled ? 'none' : borderColor,
          borderWidth,
        },
      ]}
      onPress={() => (onPress ? onPress() : null)}>
      {/* Icon */}
      {icon ? (
        <Image
          source={{uri: icon, headers: {accept: '*/*'}}}
          style={[styles.icon]}
        />
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  text: {
    textAlign: 'center',
    marginHorizontal: 12,
  },
  icon: {
    height: 32,
    width: 32,
    borderRadius: 50,
  },
});

export default IconCircleButton;
