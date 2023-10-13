"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_svg_1 = __importStar(require("react-native-svg"));
const gradients_1 = require("../../utils/gradients");
const WOIParallelogramButton = (props) => {
    const { width, height, backgroundColor, borderColor, borderWidth, gradientColors, gradientDirection, text, fontColor, fontSize, fontWeight, textTransform, prefixIcon, suffixIcon, onPress, isDisabled, elevation, tiltDirection, } = props;
    return (<react_native_1.View style={styles.container}>
      <react_native_1.TouchableOpacity disabled={isDisabled} onPress={() => (onPress ? onPress() : null)} style={{
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
        <react_native_svg_1.default height={height} width={width}>
          <react_native_svg_1.Defs>
            <react_native_svg_1.LinearGradient id="grad" x1={gradientDirection
            ? gradients_1.gradientDirections[gradientDirection].x1
            : undefined} y1={gradientDirection
            ? gradients_1.gradientDirections[gradientDirection].y1
            : undefined} x2={gradientDirection
            ? gradients_1.gradientDirections[gradientDirection].x2
            : undefined} y2={gradientDirection
            ? gradients_1.gradientDirections[gradientDirection].y2
            : undefined}>
              {gradientColors === null || gradientColors === void 0 ? void 0 : gradientColors.map((color, index) => (<react_native_svg_1.Stop key={index} offset={`${(index * 100) / (gradientColors.length - 1)}%`} stopColor={color}/>))}
            </react_native_svg_1.LinearGradient>
          </react_native_svg_1.Defs>
          <react_native_svg_1.Polygon points={tiltDirection === 'left'
            ? `0,0 ${width - 50},0 ${width}, ${height} 50,${height}`
            : `50,0 ${width},0 ${width - 50},${height} 0,${height}`} fill={gradientColors ? 'url(#grad)' : backgroundColor} strokeWidth={borderWidth} stroke={borderColor}/>
        </react_native_svg_1.default>
        <react_native_1.View style={[styles.buttonTitleContainer]}>
          
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
      </react_native_1.TouchableOpacity>
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        alignItems: 'center',
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
exports.default = WOIParallelogramButton;
//# sourceMappingURL=index.js.map