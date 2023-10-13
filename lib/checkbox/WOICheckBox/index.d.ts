import React from 'react';
interface WOICheckBoxProps {
    activeBackgroundColor?: string;
    activeBorderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    icon?: string;
    iconSize?: number;
    inActiveBackgroundColor?: string;
    inActiveBorderColor?: string;
    isChecked?: boolean;
    onPress?: Function;
    size?: number;
}
declare function WOICheckBox(props: WOICheckBoxProps): React.JSX.Element;
export default WOICheckBox;
