import React from 'react';
interface WOITextButtonProps {
    width?: number;
    height?: number;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    gradientColors?: string[];
    gradientDirection?: 'left' | 'right' | 'top' | 'bottom' | 'left-diagonal' | 'right-diagonal';
    text?: string;
    fontColor?: string;
    fontSize?: number;
    fontWeight?: any;
    fontFamily?: string;
    textTransform?: any;
    prefixIcon?: any;
    suffixIcon?: any;
    iconSize?: number;
    onPress?: Function;
    isDisabled?: boolean;
    isLoading?: boolean;
    elevation?: number;
}
declare function WOITextButton(props: WOITextButtonProps): React.JSX.Element;
export default WOITextButton;
