import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";


interface WOICheckBoxProps {
    size: number;
    borderRadius?: number;
    borderWidth?: number;
    activeBorderColor?: string;
    inActiveBorderColor?: string;
    activeBackgroundColor?: string;
    inActiveBackgroundColor?: string;
    icon?: string;
    iconSize?: number;
    isChecked: boolean;
    onPress?: Function;
}

function WOICheckBox(props: WOICheckBoxProps) {
    const [toggled, setToggled] = useState(false);
    const {
        size,
        borderRadius,
        borderWidth,
        activeBorderColor,
        inActiveBorderColor,
        activeBackgroundColor,
        inActiveBackgroundColor,
        icon,
        iconSize,
        isChecked
    } = props;

    useEffect(() => {
        setToggled(isChecked);
    }, [isChecked]);

    return (
        <TouchableOpacity
            disabled={false}
            style={[styles.container, {
                backgroundColor: toggled
                    ? activeBackgroundColor
                    : inActiveBackgroundColor,

                height: `${size}px`,
                width: `${size}px`,
                borderRadius: `${borderRadius}px`,
                borderWidth: `${borderWidth}px`,
                borderColor: toggled ? activeBorderColor : inActiveBorderColor
            }
            ]}
            onPress={() => (onPress ? setToggled(!toggled) : null)}
        >
            {toggled && icon && (
                <Image source={{ uri: icon, headers: { accept: "*/*" } }} style={{ height: iconSize, width: iconSize }} />
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px"
    }
});

export default WOICheckBox;