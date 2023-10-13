"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_linear_gradient_1 = __importDefault(require("react-native-linear-gradient"));
const gradients_1 = require("../../utils/gradients");
function WOITextButton(props) {
    const { width, height, backgroundColor, borderColor, borderRadius, borderWidth, gradientColors, gradientDirection, text, fontColor, fontSize, fontWeight, textTransform, prefixIcon, suffixIcon, onPress, isDisabled, elevation, } = props;
    return (<react_native_1.TouchableOpacity disabled={isDisabled} style={{
            backgroundColor,
            borderRadius: borderRadius ? borderRadius : 0,
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
        }} onPress={() => (onPress ? onPress() : null)}>
      
      <react_native_linear_gradient_1.default start={gradientDirection
            ? gradients_1.gradientStartDirections[gradientDirection]
            : undefined} end={gradientDirection
            ? gradients_1.gradientEndDirections[gradientDirection]
            : undefined} useAngle={gradientDirection === 'left-diagonal' ||
            gradientDirection === 'right-diagonal'
            ? true
            : false} angle={gradientDirection
            ? gradientDirection === 'left-diagonal'
                ? 45
                : 135
            : undefined} angleCenter={gradientDirection ? { x: 0.5, y: 0.5 } : undefined} colors={gradientColors ? gradientColors : ['transparent', 'transparent']} style={[
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
        <react_native_1.View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: 10,
        }}>
          
          {prefixIcon ? (<react_native_1.Image source={{ uri: prefixIcon, headers: { accept: '*/*' } }} style={[styles.icon]}/>) : null}
          
          <react_native_1.Text style={[
            styles.text,
            {
                color: fontColor,
                fontSize: fontSize,
                fontWeight: fontWeight,
                textTransform,
            },
        ]}>
            {text}
          </react_native_1.Text>
          
          {suffixIcon ? (<react_native_1.Image source={{ uri: suffixIcon, headers: { accept: '*/*' } }} style={[styles.icon]}/>) : null}
        </react_native_1.View>
      </react_native_linear_gradient_1.default>
    </react_native_1.TouchableOpacity>);
}
const styles = react_native_1.StyleSheet.create({
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
exports.default = WOITextButton;
//# sourceMappingURL=index.js.map