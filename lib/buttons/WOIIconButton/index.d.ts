import React from 'react';
interface WOIIconButtonProps {
    size?: number;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    elevation?: number;
    icon?: string;
    iconColor?: string;
    iconSize?: number;
    iconBorderRadius?: number;
    onPress?: Function;
    isDisabled?: boolean;
}
declare function WOIIconButton(props: WOIIconButtonProps): React.JSX.Element;
export default WOIIconButton;
