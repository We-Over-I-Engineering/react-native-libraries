import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";


interface WOISwitchButtonProps {
    trackWidth: number;
    trackHeight: number;
    padding?: number;
    trackBorderRadius?: number;
    trackBorderColor?: string;
    trackBorderWidth?: number;
    trackActiveColor?: string;
    trackInActiveColor?: string;
    thumbSize: number;
    thumbBorderRadius?: number;
    thumbBorderColor?: string;
    thumbBorderWidth?: number;
    thumbActiveColor?: string;
    thumbInActiveColor?: string;
    isActive: boolean;
    thumbIconSize?: number;
    thumbActiveIcon?: string;
    thumbInActiveIcon?: string;
}

function WOISwitchButton(props: WOISwitchButtonProps) {
    const {
        trackWidth,
        trackHeight,
        padding,
        trackBorderRadius,
        trackBorderColor,
        trackBorderWidth,
        trackActiveColor,
        trackInActiveColor,
        thumbSize,
        thumbBorderRadius,
        thumbBorderColor,
        thumbBorderWidth,
        thumbActiveColor,
        thumbInActiveColor,
        isActive,
        thumbIconSize,
        thumbActiveIcon,
        thumbInActiveIcon
    } = props;
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        setToggled(isActive);
    }, [isActive]);

    return (
        <TouchableOpacity disabled={false} onPress={() => setToggled(!toggled)}>
            <View
                style={[
                    styles.container,
                    {
                        width: trackWidth,
                        height: trackHeight,
                        backgroundColor: toggled ? trackActiveColor : trackInActiveColor,
                        borderRadius: trackBorderRadius,
                        padding,
                        borderColor: trackBorderColor,
                        borderWidth: trackBorderWidth
                    }
                ]}
            >
                <View
                    style={{
                        width: thumbSize,
                        height: thumbSize,
                        backgroundColor: toggled ? thumbActiveColor : thumbInActiveColor,
                        borderRadius: thumbBorderRadius,
                        borderColor: thumbBorderColor,
                        borderWidth: thumbBorderWidth,
                        position: "absolute",
                        top: "50%",
                        left: toggled ? "85%" : "15%",
                        transform: `translateY(-50%) translateX(-50%)`
                    }}
                >
                    {!toggled && thumbInActiveIcon && (
                        <Image
                            source={{ uri: thumbInActiveIcon, headers: { accept: "*/*" } }}
                            style={{
                                height: thumbIconSize,
                                width: thumbIconSize,
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)"
                            }}
                        />
                    )}
                    {toggled && thumbActiveIcon && (
                        <Image
                            source={{ uri: thumbActiveIcon, headers: { accept: "*/*" } }}
                            style={{
                                height: thumbIconSize,
                                width: thumbIconSize,
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)"
                            }}
                        />
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px",
        margin: "20px"
    }
});

export default WOISwitchButton;