import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from "react-native"
import Colors from "../Colors"

type PrimaryButtonProps = {
    title: string
    onPress: (event: GestureResponderEvent) => void
    backgroundColor?: string
    titleColor?: string
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {

    const {title, onPress, backgroundColor, titleColor} = props

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

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={{...styles.container, ...dinamicBackgroundColor()}}>
                <Text style={{...styles.title, ...dinamicTitleColor()}}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    title: {
        fontFamily: 'Neuton_700Bold',
        fontSize: 24,
        textAlign: 'center'
    }
})

export default PrimaryButton