import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

interface IconButtonProps {
  size?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  elevation?: number;
  icon?: string;
  iconColor?: string;
  iconSize?: number;
  iconBorderRadius?: number;
  onPress?: Function;
  isDisabled?: boolean;
}

function IconButton(props: IconButtonProps) {
  const {
    size,
    backgroundColor,
    borderColor,
    borderWidth,
    borderRadius,
    elevation,
    icon,
    iconSize,
    iconBorderRadius,
    onPress,
    isDisabled,
  } = props;
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[
        styles.button,
        {
          width: size,
          height: size,
          borderRadius: borderRadius,
          backgroundColor: isDisabled ? '#D9D9D9' : backgroundColor,
          borderColor: isDisabled ? 'none' : borderColor,
          borderWidth,
          shadowColor: elevation ? '#000' : undefined,
          shadowOffset: elevation
            ? {
                width: 0,
                height: elevation ? elevation / 2 : 0,
              }
            : undefined,
          shadowOpacity: elevation ? 0.25 : undefined, // figure out wrf elevation
          shadowRadius: elevation ? 4 : undefined, // figure out wrf elevation
          elevation: elevation,
        },
      ]}
      onPress={() => (onPress ? onPress() : null)}>
      {/* Icon */}
      {icon ? (
        <Image
          source={{uri: icon, headers: {accept: '*/*'}}}
          style={[
            styles.icon,
            {
              height: iconSize,
              width: iconSize,
              borderRadius: iconBorderRadius,
            },
          ]}
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

export default IconButton;
