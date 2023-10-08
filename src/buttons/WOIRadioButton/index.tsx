import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";


interface WOIRadioButtonProps {
    size: number;
    activeBorderColor?: string;
    inActiveBorderColor?: string;
    borderWidth?: number;
    activeColor?: string;
    inActiveColor?: string;
    isSelected: boolean;
    onPress?: Function
}


function WOIRadioButton(props: WOIRadioButtonProps) {
    const { size, activeBorderColor, inActiveBorderColor, borderWidth, activeColor, inActiveColor, isSelected, onPress } = props;
    const [toggled, setToggled] = useState(false);
    useEffect(() => {
        setToggled(isSelected);
    }, [isSelected]);

    return (
        <TouchableOpacity
            disabled={false}
            style={[styles.container,
            {
                height: size,
                width: size,
                borderColor: toggled ? activeColor : inActiveColor,
                borderWidth
            }
            ]}
            onPress={() => (onPress ? setToggled(!toggled) : null)}
        >
            <View style={{
                width: size - 4,
                height: size - 4,
                backgroundColor: toggled ? activeBorderColor : inActiveBorderColor,
                borderRadius: 100,
                borderColor: toggled ? activeColor : inActiveColor,
                borderWidth: borderWidth
            }}></View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
        borderRadius: 100,
        padding: "8px",
        margin: "20px"
    }
});

export default WOIRadioButton;