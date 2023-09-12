import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface LoaderButtonProps {
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
  loading?: boolean;
  loaderColor?: string;
  loadingIcon?: any;
}

function LoaderButton(props: LoaderButtonProps) {
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
    loading,
    loaderColor,
    loadingIcon,
  } = props;
  return (
    // Capsule Button
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
      {/* Button View */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          padding: 10,
        }}>
        {loading ? (
          //* Loader *//
          loadingIcon ? (
            <Image
              source={{uri: loadingIcon, headers: {accept: '*/*'}}}
              style={[styles.icon]}
            />
          ) : (
            <ActivityIndicator color={loaderColor} />
          )
        ) : (
          //* Button Text *//
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
        )}
      </View>
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

export default LoaderButton;
