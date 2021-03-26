import React from 'react';
import { GestureResponderEvent, Image, ImageSourcePropType, ImageStyle, StyleSheet, Text, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from "react-native"
import Colors from "../Colors"

type PrimaryButtonProps = {
    title: string,
    icon?: ImageSourcePropType,
    onPress: (event: GestureResponderEvent) => void
    backgroundColor?: string
    titleColor?: string,
    style?: ViewStyle
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {

    const { title, icon, onPress, backgroundColor, titleColor, style = {} } = props

    const dinamicBackgroundColor = (): ViewStyle => {
        return {
            backgroundColor: backgroundColor || Colors.FORMAL_BLUE
        }
    }

    const dinamicTitleColor = (): TextStyle => {
        return {
            color: titleColor || Colors.TEXT_PRIMARY_LIGHT
        }
    }

    const dinamicIconStyles = (): ImageStyle => {
        return {
            tintColor: titleColor
        }
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={{ ...styles.container, ...style, ...dinamicBackgroundColor() }}>
                {icon && (
                    <Image style={{...styles.icon, ...dinamicIconStyles}} source={icon}></Image>
                )}
                <Text style={{ ...styles.title, ...dinamicTitleColor() }}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "center"
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
        resizeMode: "contain"
    },
    title: {
        fontFamily: 'Neuton_700Bold',
        fontSize: 24
    }
})

export default PrimaryButton