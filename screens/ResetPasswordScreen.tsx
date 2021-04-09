import { useNavigation } from "@react-navigation/core"
import React, { useState } from "react"
import { SafeAreaView, Image, StyleSheet, Text, TouchableWithoutFeedback } from "react-native"
import BaseStyles from "../BaseStyles"
import Colors from "../Colors"
import FormalInput from "../components/FormalInput"
import PrimaryButton from "../components/PrimaryButton"
import { ResetPasswordReq } from "../types/ResetPasswordReq"

const BackIcon = require("../assets/arrow-back-icon.png")
const PasswordIcon = require("../assets/password-icon.png")
const ResetPasswordIcon = require("../assets/reset-password-icon.png")

const ResetPasswordScreen: React.FC = () => {

    const [form, setForm] = useState<ResetPasswordReq>({
        password: "",
        repeatPassword: ""
    })

    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack()
    }

    const onAttributeChanged = (attribute: string, value: string) => {
        setForm({
            ...form,
            [attribute]: value
        })
    }

    const submit = () => {
        console.log("form submitted")
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={() => goBack()}>
                <Image style={styles.back} source={BackIcon}></Image>
            </TouchableWithoutFeedback>

            <Image style={styles.lockIcon} source={ResetPasswordIcon}></Image>

            <Text style={{ ...BaseStyles.subtitle, ...styles.subtitle }}>Reset Password</Text>

            <Text style={styles.regularText}>
                Enter the email account associated with your account. We will send you an email
                with a link to set a new password.
            </Text>
            <FormalInput
                style={styles.emailInput}
                label="Password"
                placeholder="Enter your new password"
                value={form.password}
                onChange={(value) => onAttributeChanged("password", value)}
                icon={PasswordIcon}>
            </FormalInput>
            <FormalInput
                style={styles.emailInput}
                label="Repeat password"
                placeholder="Repeat your new password"
                value={form.repeatPassword}
                onChange={(value) => onAttributeChanged("repeatPassword", value)}
                icon={PasswordIcon}>
            </FormalInput>

            <PrimaryButton title="Confirm" onPress={() => submit()}></PrimaryButton>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 50,
    },
    back: {
        height: 44,
        width: 44,
        alignSelf: "flex-start",
        marginBottom: 20
    },
    subtitle: {
        textAlign: "left",
        width: "100%",
        fontSize: 24,
        marginBottom: 12
    },
    regularText: {
        fontFamily: "Neuton_400Regular",
        fontSize: 17,
        color: Colors.TEXT_PRIMARY,
        marginBottom: 40
    },
    lockIcon: {
        height: 75,
        width: 75,
        resizeMode: "contain",
        marginBottom: 32
    },
    emailInput: {
        marginBottom: 30
    }
})

export default ResetPasswordScreen
