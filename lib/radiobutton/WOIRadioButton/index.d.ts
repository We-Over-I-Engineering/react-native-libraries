import React from 'react';
interface WOIRadioButtonProps {
    activeBorderColor?: string;
    activeColor?: string;
    borderWidth?: number;
    fillSize?: number;
    inActiveBorderColor?: string;
    isSelected?: boolean;
    onPress?: Function;
    size?: number;
}
declare function WOIRadioButton(props: WOIRadioButtonProps): React.JSX.Element;
export default WOIRadioButton;
