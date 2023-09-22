import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  gradientEndDirections,
  gradientStartDirections,
} from '../../../utils/Gradient';

interface TextButtonProps {
  //button container style props
  width?: number;
  height?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  //gradient props
  gradientColors?: string[];
  gradientDirection?:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'left-diagonal'
    | 'right-diagonal';
  //button text style props
  text?: string;
  fontColor?: string;
  fontSize?: number;
  fontWeight?: any;
  fontFamily?: string;
  textTransform?: any;
  //icons and style
  prefixIcon?: any;
  suffixIcon?: any;
  iconSize?: number;
  //button function
  onPress?: Function;
  //button states
  isDisabled?: boolean;
  isLoading?: boolean;
  //shadows
  elevation?: number;
}

function TextButton(props: TextButtonProps) {
  const {
    width,
    height,
    backgroundColor,
    borderColor,
    borderRadius,
    borderWidth,
    gradientColors,
    gradientDirection,
    text,
    fontColor,
    fontSize,
    fontWeight,
    textTransform,
    prefixIcon,
    suffixIcon,
    onPress,
    isDisabled,
    elevation,
  } = props;
  return (
    // Text Button
    <TouchableOpacity
      disabled={isDisabled}
      style={{
        backgroundColor,
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
      }}
      onPress={() => (onPress ? onPress() : null)}>
      {/* Button View */}
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
        colors={gradientColors ? gradientColors : ['transparent']}
        style={[
          styles.button,
          {
            width,
            height,
            backgroundColor,
            borderColor,
            borderWidth,
            borderRadius: borderRadius ? borderRadius : 0,
          },
        ]}>
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
                color: fontColor,
                fontSize: fontSize,
                fontWeight: fontWeight,
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
    backgroundColor: '#fff',
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

export default TextButton;
