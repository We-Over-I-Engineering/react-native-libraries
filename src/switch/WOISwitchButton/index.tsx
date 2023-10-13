import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

interface WOISwitchButtonProps {
  isActive?: boolean;
  onPress?: Function;
  padding?: number;
  thumbActiveColor?: string;
  thumbActiveIcon?: string;
  thumbBorderColor?: string;
  thumbBorderRadius?: number;
  thumbBorderWidth?: number;
  thumbIconSize?: number;
  thumbInActiveColor?: string;
  thumbInActiveIcon?: string;
  thumbSize?: number;
  trackActiveColor?: string;
  trackBorderColor?: string;
  trackBorderRadius?: number;
  trackBorderWidth?: number;
  trackHeight?: number;
  trackInActiveColor?: string;
  trackWidth?: number;
}

function WOISwitchButton(props: WOISwitchButtonProps) {
  const {
    isActive,
    onPress,
    padding,
    thumbActiveColor,
    thumbActiveIcon,
    thumbBorderColor,
    thumbBorderRadius,
    thumbBorderWidth,
    thumbIconSize,
    thumbInActiveColor,
    thumbInActiveIcon,
    thumbSize,
    trackActiveColor,
    trackBorderColor,
    trackBorderRadius,
    trackBorderWidth,
    trackHeight,
    trackInActiveColor,
    trackWidth,
  } = props;

  return (
    <TouchableOpacity
      disabled={false}
      onPress={() => (onPress ? onPress() : null)}>
      <View
        style={[
          styles.container,
          {
            alignItems: isActive ? 'flex-end' : 'flex-start',
            backgroundColor: isActive ? trackActiveColor : trackInActiveColor,
            borderColor: trackBorderColor,
            borderRadius: trackBorderRadius,
            borderWidth: trackBorderWidth,
            height: trackHeight,
            justifyContent: 'center',
            padding,
            width: trackWidth,
          },
        ]}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: isActive ? thumbActiveColor : thumbInActiveColor,
            borderColor: thumbBorderColor,
            borderRadius: thumbBorderRadius,
            borderWidth: thumbBorderWidth,
            height: thumbSize,
            justifyContent: 'center',
            width: thumbSize,
          }}>
          {isActive ? (
            thumbActiveIcon ? (
              <Image
                source={{uri: thumbActiveIcon, headers: {accept: '*/*'}}}
                style={{
                  borderRadius: thumbBorderRadius,
                  height: thumbIconSize,
                  width: thumbIconSize,
                }}
              />
            ) : null
          ) : thumbInActiveIcon ? (
            <Image
              source={{uri: thumbInActiveIcon, headers: {accept: '*/*'}}}
              style={{
                borderRadius: thumbBorderRadius,
                height: thumbIconSize,
                width: thumbIconSize,
              }}
            />
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WOISwitchButton;
