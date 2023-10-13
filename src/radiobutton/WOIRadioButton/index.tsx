import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

interface WOIRadioButtonProps {
  activeBorderColor?: string;
  activeColor?: string;
  borderWidth?: number;
  fillSize?: number;
  inActiveBorderColor?: string;
  isSelected?: boolean;
  onPress?: Function;
  size?: number;
}

function WOIRadioButton(props: WOIRadioButtonProps) {
  const {
    activeBorderColor,
    activeColor,
    borderWidth,
    fillSize,
    inActiveBorderColor,
    isSelected,
    onPress,
    size,
  } = props;

  return (
    <TouchableOpacity
      disabled={false}
      style={[
        styles.container,
        {
          backgroundColor: 'transparent',
          borderColor: isSelected ? activeBorderColor : inActiveBorderColor,
          borderWidth,
          height: size,
          width: size,
        },
      ]}
      onPress={() => (onPress ? onPress() : null)}>
      {isSelected ? (
        <View
          style={{
            backgroundColor: activeColor,
            borderRadius: 100,
            height: fillSize,
            width: fillSize,
          }}
        />
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 100,
    justifyContent: 'center',
  },
});

export default WOIRadioButton;
