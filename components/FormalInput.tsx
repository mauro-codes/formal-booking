import React from "react"
import { View, Text, StyleSheet, Image, ImageSourcePropType, TextInput, ViewStyle } from "react-native"
import Colors from "../Colors"

type FormalInputProps = {
    label: string
    icon: ImageSourcePropType,
    placeholder: string,
    style?: ViewStyle,
    isProtected?: boolean
}

const FormalInput: React.FC<FormalInputProps> = (props) => {

    const { label, icon, placeholder, style = {}, isProtected = false } = props

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Image style={styles.icon} source={icon}></Image>
                <TextInput secureTextEntry={isProtected} placeholder={placeholder}></TextInput>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    input: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        paddingBottom: 5,
        fontFamily: "Neuton_400Regular"
    },
    label: {
        fontFamily: 'Neuton_700Bold',
        fontSize: 16,
        color: Colors.FORMAL_BLUE,
        marginBottom: 12
    },
    icon: {
        resizeMode: 'contain',
        height: 20,
        width: 20,
        marginRight: 10
    },
    subtitle: {
        textAlign: "left",
        width: "100%",
        fontSize: 24
    }
})

export default FormalInput