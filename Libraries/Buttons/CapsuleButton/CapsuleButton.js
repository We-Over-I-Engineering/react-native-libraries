import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

function CapsuleButton({
  height,
  width,
  backgroundColor,
  borderColor,
  text,
  textStyle,
  prefixIcon,
  suffixIcon,
  padding,
  onPress,
  btnStyle,
  disable,
}) {
  return (
    <TouchableOpacity
      disabled={disable}
      activeOpacity={0.7}
      style={[
        styles.getStartedBtn,
        btnStyle,
        {
          height,
          width,
          backgroundColor,
          borderWidth: borderColor ? 2 : null,
          borderColor: borderColor,
        },
      ]}
      onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          padding: 10,
        }}>
        {prefixIcon ? prefixIcon : null}
        <Text style={[styles.getStartedBtnText, textStyle]}>{text}</Text>
        {suffixIcon ? suffixIcon : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  getStartedBtn: {
    width: 200,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 360,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedBtnText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
});

export default CapsuleButton;
