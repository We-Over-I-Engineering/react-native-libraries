import React from 'react';
interface WOIParallelogramButtonnProps {
    width: number;
    height: number;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
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
    onPress: Function;
    isDisabled?: boolean;
    isLoading?: boolean;
    elevation?: number;
    tiltDirection?: 'left' | 'right';
}
declare const WOIParallelogramButton: (props: WOIParallelogramButtonnProps) => React.JSX.Element;
export default WOIParallelogramButton;
