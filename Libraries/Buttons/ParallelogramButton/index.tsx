import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ParallelogramButtonnProps {
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
  prefixIcon?: string;
  suffixIcon?: string;
  onPress?: Function;
  isDisabled?: boolean;
  tiltDirection?: 'left' | 'right';
}

function ParallelogramButton(props: ParallelogramButtonnProps) {
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
    tiltDirection,
  } = props;
  return (
    // Parallelogram Button
    <TouchableOpacity
      disabled={isDisabled}
      onPress={() => (onPress ? onPress() : null)}>
      {/* Button View */}
      <View
        style={[
          styles.parallelogram,
          {
            width,
            height,
            backgroundColor: isDisabled ? '#D9D9D9' : backgroundColor,
            borderColor: isDisabled ? 'none' : borderColor,
            borderWidth,
            transform:
              tiltDirection === 'left'
                ? [{skewX: '25deg'}]
                : [{skewX: '-20deg'}],
          },
        ]}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            transform:
              tiltDirection === 'left'
                ? [{skewX: '-25deg'}]
                : [{skewX: '20deg'}],
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
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  parallelogram: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
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

export default ParallelogramButton;
