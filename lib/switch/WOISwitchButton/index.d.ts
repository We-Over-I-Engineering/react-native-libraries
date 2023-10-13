import React from 'react';
interface WOISwitchButtonProps {
    isActive?: boolean;
    onPress?: Function;
    padding?: number;
    thumbActiveColor?: string;
    thumbActiveIcon?: string;
    thumbBorderColor?: string;
    thumbBorderRadius?: number;
    thumbBorderWidth?: number;
    thumbIconSize?: number;
    thumbInActiveColor?: string;
    thumbInActiveIcon?: string;
    thumbSize?: number;
    trackActiveColor?: string;
    trackBorderColor?: string;
    trackBorderRadius?: number;
    trackBorderWidth?: number;
    trackHeight?: number;
    trackInActiveColor?: string;
    trackWidth?: number;
}
declare function WOISwitchButton(props: WOISwitchButtonProps): React.JSX.Element;
export default WOISwitchButton;
