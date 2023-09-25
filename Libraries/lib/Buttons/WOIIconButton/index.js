"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
function WOIIconButton(props) {
    const { size, backgroundColor, borderColor, borderWidth, borderRadius, elevation, icon, iconSize, iconBorderRadius, onPress, isDisabled, } = props;
    return (<react_native_1.TouchableOpacity disabled={isDisabled} style={[
            styles.button,
            {
                width: size,
                height: size,
                borderRadius: borderRadius,
                borderColor,
                borderWidth,
                backgroundColor,
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
            },
        ]} onPress={() => (onPress ? onPress() : null)}>
      
      {icon ? (<react_native_1.Image source={{ uri: icon, headers: { accept: '*/*' } }} style={[
                styles.icon,
                {
                    height: iconSize,
                    width: iconSize,
                    borderRadius: iconBorderRadius,
                },
            ]}/>) : null}
    </react_native_1.TouchableOpacity>);
}
const styles = react_native_1.StyleSheet.create({
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
exports.default = WOIIconButton;
//# sourceMappingURL=index.js.map