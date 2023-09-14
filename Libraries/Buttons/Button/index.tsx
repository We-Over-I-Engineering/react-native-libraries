import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  gradientEndDirections,
  gradientStartDirections,
} from '../../utils/Gradient';

interface ButtonProps {
  backgroundColor?: string;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  textSize?: number;
  textWeight?: any;
  gradientDirection?:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'left-diagonal'
    | 'right-diagonal';
  gradientColors?: string[];
  height?: number;
  loaderColor?: string;
  loading?: boolean;
  prefixIcon?: string;
  suffixIcon?: string;
  text?: string;
  textColor?: string;
  textTransform?: any;
  width?: number;
  onPress?: Function;
  isDisabled?: boolean;
}

function Button(props: ButtonProps) {
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
    prefixIcon,
    suffixIcon,
    onPress,
    isDisabled,
    gradientDirection,
    gradientColors,
  } = props;
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[
        styles.button,
        {
          width,
          height,
          backgroundColor: isDisabled ? '#D9D9D9' : backgroundColor,
          borderColor: isDisabled ? 'none' : borderColor,
          borderWidth,
        },
      ]}
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
          {/* Prefix Icon */}
          {prefixIcon ? (
            <Image
              source={{uri: prefixIcon, headers: {accept: '*/*'}}}
              style={[styles.icon]}
            />
          ) : null}
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
          {/* Suffix Icon */}
          {suffixIcon ? (
            <Image
              source={{uri: suffixIcon, headers: {accept: '*/*'}}}
              style={[styles.icon]}
            />
          ) : null}
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

export default Button;
