import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Text,
  ColorValue,
  DimensionValue,
  Image,
} from 'react-native';

interface WOITextFieldProps {
  onChange?: Function;
  onComplete?: Function;
  inputType?:
    | 'decimal'
    | 'email'
    | 'none'
    | 'numeric'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | undefined;
  //Input Text Properties
  text?: string;
  textFontFamily?: string;
  textFontSize?: number;
  textFontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  textColor?: ColorValue | undefined;
  //Left Icon Properties
  leftIcon?: any;
  leftIconSize?: number;
  leftIconWeight?: number;
  leftIconColor?: ColorValue | undefined;
  leftIconOnPress?: Function;
  //Right Icon Properties
  rightIcon?: any;
  rightIconSize?: number;
  rightIconWeight?: number;
  rightIconColor?: ColorValue | undefined;
  rightIconOnPress?: Function;
  //Placeholder Text
  placeholder?: string;
  placeholderColor?: ColorValue | undefined;
  //Supporting Text Properties
  supportingText?: string;
  supportingTextFontFamily?: string;
  supportingTextFontSize?: number;
  supportingTextFontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  supportingTextColor?: ColorValue | undefined;
  //Label Text Properties
  labelText?: string;
  labelTextFontFamily?: string;
  labelTextFontSize?: number;
  labelTextFontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  labelTextColor?: ColorValue | undefined;
  //Container Properties
  backgroundColor?: ColorValue | undefined;
  opacity?: number;
  borderColor?: ColorValue | undefined;
  borderWidth?: number;
  borderRadius?: number;
  elevation?: number;
  height?: DimensionValue | undefined;
  width?: DimensionValue | undefined;

  //patternregex
}

function WOITextField(props: WOITextFieldProps) {
  const {
    onChange,
    onComplete,
    inputType,
    text,
    textFontFamily,
    textFontSize,
    textFontWeight,
    textColor,
    leftIcon,
    leftIconSize,
    // leftIconWeight,
    // leftIconColor,
    leftIconOnPress,
    rightIcon,
    rightIconSize,
    // rightIconWeight,
    // rightIconColor,
    placeholder,
    placeholderColor,
    rightIconOnPress,
    supportingText,
    supportingTextFontFamily,
    supportingTextFontSize,
    supportingTextFontWeight,
    supportingTextColor,
    labelText,
    labelTextFontFamily,
    labelTextFontSize,
    labelTextFontWeight,
    labelTextColor,
    backgroundColor,
    opacity,
    borderColor,
    borderWidth,
    borderRadius,
    elevation,
    height,
    width,
  } = props;

  // const [text, onChangeNumber] = React.useState('');

  return (
    <View
      style={{
        alignContent: 'center',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 5,
      }}>
      <Text
        style={{
          fontFamily: labelTextFontFamily,
          fontSize: labelTextFontSize,
          fontWeight: labelTextFontWeight,
          color: labelTextColor,
        }}>
        {labelText}
      </Text>
      <View
        style={[
          styles.input,
          {
            backgroundColor: backgroundColor ? backgroundColor : '#F3F7FD',
            opacity: opacity ? opacity : 1,
            borderColor: borderColor ? borderColor : '#007EDA',
            borderWidth: borderWidth ? borderWidth : 1,
            borderRadius,
            elevation,
            height,
            width,
          },
        ]}>
        {/* Prefix Icon */}
        {leftIcon ? (
          <TouchableOpacity
            onPress={() => (leftIconOnPress ? leftIconOnPress() : null)}>
            <View>
              <Image
                source={{uri: leftIcon, headers: {accept: '*/*'}}}
                style={{
                  height: leftIconSize,
                  width: leftIconSize,
                }}
              />
            </View>
          </TouchableOpacity>
        ) : null}
        <TextInput
          onChange={() => onChange}
          onSubmitEditing={() => onComplete}
          inputMode={inputType}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          keyboardType="numeric"
          style={{flex: 1, marginHorizontal: 5}}>
          <Text
            style={[
              styles.placeholder,
              {
                fontFamily: textFontFamily,
                fontSize: textFontSize,
                fontWeight: textFontWeight,
                color: textColor,
              },
            ]}>
            {text}
          </Text>
        </TextInput>
        {/* Suffix Icon */}
        {rightIcon ? (
          <TouchableOpacity
            onPress={() => (rightIconOnPress ? rightIconOnPress() : null)}>
            <View>
              <Image
                source={{uri: rightIcon, headers: {accept: '*/*'}}}
                style={{
                  height: rightIconSize,
                  width: rightIconSize,
                }}
              />
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
      <Text
        style={{
          fontFamily: supportingTextFontFamily,
          fontSize: supportingTextFontSize,
          fontWeight: supportingTextFontWeight,
          color: supportingTextColor,
        }}>
        {supportingText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
  },
  placeholder: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '400',
  },
});

export default WOITextField;
