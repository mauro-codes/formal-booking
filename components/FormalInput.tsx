import React from "react"
import { View, Text, StyleSheet, Image, ImageSourcePropType, TextInput, ViewStyle } from "react-native"
import Colors from "../Colors"

type FormalInputProps = {
    label: string
    icon: ImageSourcePropType,
    placeholder?: string,
    style?: ViewStyle,
    isProtected?: boolean
    readOnly?: boolean
    value?: string
    onChange: (text: string) => void
}

const FormalInput: React.FC<FormalInputProps> = (props) => {

    const { label, icon, placeholder, style = {}, isProtected = false, readOnly = false, value, onChange } = props

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.wrapper}>
                <Image style={styles.icon} source={icon}></Image>
                <TextInput 
                    value={value}
                    editable={!readOnly}
                    secureTextEntry={isProtected} 
                    placeholder={placeholder}
                    onChangeText={(text) => onChange(text)}
                    style={styles.input}></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    wrapper: {
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
    },
    input: {
        color: Colors.TEXT_PRIMARY
    }
})

export default FormalInput
