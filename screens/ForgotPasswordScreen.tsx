import { useNavigation } from "@react-navigation/core"
import React, { useState } from "react"
import { SafeAreaView, Image, StyleSheet, Text, TouchableWithoutFeedback } from "react-native"
import BaseStyles from "../BaseStyles"
import Colors from "../Colors"
import FormalInput from "../components/FormalInput"
import PrimaryButton from "../components/PrimaryButton"

const LockIcon = require("../assets/forgot-password-icon.png")
const EmailIcon = require("../assets/email-icon.png")
const BackIcon = require("../assets/arrow-back-icon.png")

const ForgotPasswordScreen: React.FC = () => {

    const [email, setEmail] = useState<string>()
    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack()
    }

    const submit = () => {
        console.log("form submitted")
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={() => goBack()}>
                <Image style={styles.back} source={BackIcon}></Image>
            </TouchableWithoutFeedback>

            <Image style={styles.lockIcon} source={LockIcon}></Image>

            <Text style={{ ...BaseStyles.subtitle, ...styles.subtitle }}>Forgot Password?</Text>

            <Text style={styles.regularText}>
                Enter the email account associated with your account. We will send you an email
                with a link to set a new password.
            </Text>
            <FormalInput
                onChange={(text) => setEmail(text)}
                style={styles.emailInput}
                label="Email"
                value={email}
                placeholder="Enter your email" 
                icon={EmailIcon}>
            </FormalInput>
            <PrimaryButton title="Send" onPress={() => submit()}></PrimaryButton>
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

export default ForgotPasswordScreen
