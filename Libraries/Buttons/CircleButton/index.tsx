import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface CircleButtonProps {
  size?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  text?: string;
  textColor?: string;
  textTransform?: any;
  textSize?: number;
  textWeight?: any;
  onPress?: Function;
  isDisabled?: boolean;
}

function CircleButton(props: CircleButtonProps) {
  const {
    size,
    backgroundColor,
    borderColor,
    borderWidth,
    onPress,
    isDisabled,
    text,
    textColor,
    textTransform,
    textSize,
    textWeight,
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
      {text ? (
        <Text
          style={[
            styles.text,
            {
              color: textColor,
              fontSize: textSize,
              fontWeight: textWeight,
              textTransform,
            },
          ]}>
          {text}
        </Text>
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

export default CircleButton;
