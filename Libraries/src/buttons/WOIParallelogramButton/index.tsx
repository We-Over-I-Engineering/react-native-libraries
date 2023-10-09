import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Svg, {Polygon, Defs, LinearGradient, Stop} from 'react-native-svg';
import {gradientDirections} from '../../utils/gradients';

interface WOIParallelogramButtonnProps {
  //button container style props
  width?: number;
  height?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
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
  onPress: Function;
  //button states
  isDisabled?: boolean;
  isLoading?: boolean;
  //shadows
  elevation?: number;
  //tilt
  tiltDirection?: 'left' | 'right';
}

const WOIParallelogramButton = (props: WOIParallelogramButtonnProps) => {
  const {
    width,
    height,
    backgroundColor,
    borderColor,
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
    tiltDirection,
  } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={isDisabled}
        onPress={() => (onPress ? onPress() : null)}
        style={{
          shadowColor: elevation ? '#000' : undefined,
          shadowOffset: elevation
            ? {
                width: 0,
                height: elevation ? elevation / 2 : 0,
              }
            : undefined,
          shadowOpacity: elevation ? 0.25 : undefined,
          shadowRadius: elevation ? 4 : undefined,
          elevation: elevation,
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <Svg height={height} width={width}>
          <Defs>
            <LinearGradient
              id="grad"
              x1={gradientDirections[gradientDirection].x1}
              y1={gradientDirections[gradientDirection].y1}
              x2={gradientDirections[gradientDirection].x2}
              y2={gradientDirections[gradientDirection].y2}>
              {gradientColors?.map((color, index) => (
                <Stop
                  key={index}
                  offset={`${(index * 100) / (gradientColors.length - 1)}%`}
                  stopColor={color}
                />
              ))}
            </LinearGradient>
          </Defs>
          <Polygon
            points={
              tiltDirection === 'left'
                ? `0,0 ${width - 50},0 ${width}, ${height} 50,${height}`
                : `50,0 ${width},0 ${width - 50},${height} 0,${height}`
            }
            fill={gradientColors ? 'url(#grad)' : backgroundColor}
            strokeWidth={borderWidth}
            stroke={borderColor}
          />
        </Svg>
        <View style={[styles.buttonTitleContainer]}>
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
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
    elevation: 15,
  },
  buttonTitleContainer: {
    position: 'absolute',
    top: 0,
    left: 50,
    right: 50,
    bottom: 0,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
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

export default WOIParallelogramButton;
