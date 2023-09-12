import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientButtonProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  text?: string;
  textColor?: string;
  textSize?: number;
  textWeight?: any;
  textTransform?: any;
  onPress?: Function;
  isDisabled?: boolean;
  gradientDirection?:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'left-diagonal'
    | 'right-diagonal';
  gradientColors?: string[];
}

function GradientButton(props: GradientButtonProps) {
  const {
    width,
    height,
    backgroundColor,
    borderColor,
    borderWidth,
    text,
    textColor,
    textSize,
    textWeight,
    textTransform,
    onPress,
    isDisabled,
    gradientDirection,
    gradientColors,
  } = props;

  const gradientStartDirections = {
    left: {x: 1, y: 0},
    right: {x: 0, y: 0},
    top: {x: 0, y: 1},
    bottom: {x: 0, y: 0},
    'left-diagonal': {x: 0.1, y: 0.1},
    'right-diagonal': {x: 0, y: 0},
  };

  const gradientEndDirections = {
    left: {x: 0, y: 0},
    right: {x: 1, y: 0},
    top: {x: 0, y: 0},
    bottom: {x: 0, y: 1},
    'left-diagonal': {x: 0, y: 0},
    'right-diagonal': {x: 0, y: 0.5},
  };

  return (
    // Gradient Button
    <TouchableOpacity
      disabled={isDisabled}
      onPress={() => (onPress ? onPress() : null)}>
      <LinearGradient
        start={
          gradientDirection
            ? gradientStartDirections[gradientDirection]
            : undefined
        }
        end={
          gradientDirection
            ? gradientEndDirections[gradientDirection]
            : undefined
        }
        useAngle={
          gradientDirection === 'left-diagonal' ||
          gradientDirection === 'right-diagonal'
            ? true
            : false
        }
        angle={
          gradientDirection
            ? gradientDirection === 'left-diagonal'
              ? 45
              : 135
            : undefined
        }
        angleCenter={gradientDirection ? {x: 0.5, y: 0.5} : undefined}
        colors={
          gradientColors
            ? gradientColors
            : ['rgba(0,0,0,0)', 'rgba(40,40,40,100)']
        }
        style={[
          styles.button,
          {
            width,
            height,
            backgroundColor: isDisabled ? '#D9D9D9' : backgroundColor,
            borderColor: isDisabled ? 'none' : borderColor,
            borderWidth,
          },
        ]}>
        {/* Button View */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: 10,
          }}>
          {/* Button Text */}
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
        </View>
      </LinearGradient>
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
  gradient: {},
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

export default GradientButton;
