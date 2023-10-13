"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
function WOICheckBox(props) {
    const { activeBackgroundColor, activeBorderColor, borderRadius, borderWidth, icon, iconSize, inActiveBackgroundColor, inActiveBorderColor, isChecked, onPress, size, } = props;
    return (<react_native_1.TouchableOpacity disabled={false} style={[
            styles.container,
            {
                backgroundColor: isChecked
                    ? activeBackgroundColor
                    : inActiveBackgroundColor,
                borderColor: isChecked ? activeBorderColor : inActiveBorderColor,
                borderRadius: borderRadius,
                borderWidth: borderWidth,
                height: size,
                width: size,
            },
        ]} onPress={() => (onPress ? onPress() : null)}>
      {isChecked && icon && (<react_native_1.Image source={{ uri: icon, headers: { accept: '*/*' } }} style={{ height: iconSize, width: iconSize }}/>)}
    </react_native_1.TouchableOpacity>);
}
const styles = react_native_1.StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
exports.default = WOICheckBox;
//# sourceMappingURL=index.js.map