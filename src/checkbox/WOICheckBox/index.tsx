import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
interface WOICheckBoxProps {
  activeBackgroundColor?: string;
  activeBorderColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  icon?: string;
  iconSize?: number;
  inActiveBackgroundColor?: string;
  inActiveBorderColor?: string;
  isChecked?: boolean;
  onPress?: Function;
  size?: number;
}

function WOICheckBox(props: WOICheckBoxProps) {
  const {
    activeBackgroundColor,
    activeBorderColor,
    borderRadius,
    borderWidth,
    icon,
    iconSize,
    inActiveBackgroundColor,
    inActiveBorderColor,
    isChecked,
    onPress,
    size,
  } = props;

  return (
    <TouchableOpacity
      disabled={false}
      style={[
        styles.container,
        {
          backgroundColor: isChecked
            ? activeBackgroundColor
            : inActiveBackgroundColor,
          borderColor: isChecked ? activeBorderColor : inActiveBorderColor,
          borderRadius: borderRadius,
          borderWidth: borderWidth,
          height: size,
          width: size,
        },
      ]}
      onPress={() => (onPress ? onPress() : null)}>
      {isChecked && icon && (
        <Image
          source={{uri: icon, headers: {accept: '*/*'}}}
          style={{height: iconSize, width: iconSize}}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WOICheckBox;
