"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
function WOISwitchButton(props) {
    const { isActive, onPress, padding, thumbActiveColor, thumbActiveIcon, thumbBorderColor, thumbBorderRadius, thumbBorderWidth, thumbIconSize, thumbInActiveColor, thumbInActiveIcon, thumbSize, trackActiveColor, trackBorderColor, trackBorderRadius, trackBorderWidth, trackHeight, trackInActiveColor, trackWidth, } = props;
    return (<react_native_1.TouchableOpacity disabled={false} onPress={() => (onPress ? onPress() : null)}>
      <react_native_1.View style={[
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
        <react_native_1.View style={{
            alignItems: 'center',
            backgroundColor: isActive ? thumbActiveColor : thumbInActiveColor,
            borderColor: thumbBorderColor,
            borderRadius: thumbBorderRadius,
            borderWidth: thumbBorderWidth,
            height: thumbSize,
            justifyContent: 'center',
            width: thumbSize,
        }}>
          {isActive ? (thumbActiveIcon ? (<react_native_1.Image source={{ uri: thumbActiveIcon, headers: { accept: '*/*' } }} style={{
                borderRadius: thumbBorderRadius,
                height: thumbIconSize,
                width: thumbIconSize,
            }}/>) : null) : thumbInActiveIcon ? (<react_native_1.Image source={{ uri: thumbInActiveIcon, headers: { accept: '*/*' } }} style={{
                borderRadius: thumbBorderRadius,
                height: thumbIconSize,
                width: thumbIconSize,
            }}/>) : null}
        </react_native_1.View>
      </react_native_1.View>
    </react_native_1.TouchableOpacity>);
}
const styles = react_native_1.StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
exports.default = WOISwitchButton;
//# sourceMappingURL=index.js.map