"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
function WOIRadioButton(props) {
    const { activeBorderColor, activeColor, borderWidth, fillSize, inActiveBorderColor, isSelected, onPress, size, } = props;
    return (<react_native_1.TouchableOpacity disabled={false} style={[
            styles.container,
            {
                backgroundColor: 'transparent',
                borderColor: isSelected ? activeBorderColor : inActiveBorderColor,
                borderWidth,
                height: size,
                width: size,
            },
        ]} onPress={() => (onPress ? onPress() : null)}>
      {isSelected ? (<react_native_1.View style={{
                backgroundColor: activeColor,
                borderRadius: 100,
                height: fillSize,
                width: fillSize,
            }}/>) : null}
    </react_native_1.TouchableOpacity>);
}
const styles = react_native_1.StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 100,
        justifyContent: 'center',
    },
});
exports.default = WOIRadioButton;
//# sourceMappingURL=index.js.map