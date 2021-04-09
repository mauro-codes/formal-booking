import { useNavigation } from "@react-navigation/core"
import React, { useState } from "react"
import { ScrollView, SafeAreaView, Image, StyleSheet, Text, TouchableWithoutFeedback } from "react-native"
import BaseStyles from "../BaseStyles"
import Colors from "../Colors"
import FormalInput from "../components/FormalInput"
import PrimaryButton from "../components/PrimaryButton"
import { SignUpReq } from "../types/SignUpReq"

const Isotype = require("../assets/isotype.png")
const AvatarIcon = require("../assets/avatar-icon.png")
const EmailIcon = require("../assets/email-icon.png")
const PasswordIcon = require("../assets/password-icon.png")
const BackIcon = require("../assets/arrow-back-icon.png")
const PhoneIcon = require("../assets/phone-icon.png")

const SignUpScreen: React.FC = () => {

    const [form, setForm] = useState<SignUpReq>({
        email: "",
        fullName: "",
        phoneNumber: "",
        birthDate: "",
        password: "",
        repeatPassword: ""
    })

    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack()
    }

    const submit = () => {
        console.log("form submitted")
    }

    const navigateToTerms = () => {
        navigation.navigate("TermsAndConditions")
    }

    const onAttributeChanged = (attribute: string, value: string) => {
        setForm({
            ...form,
            [attribute]: value
        })
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <TouchableWithoutFeedback onPress={() => goBack()}>
                    <Image style={styles.back} source={BackIcon}></Image>
                </TouchableWithoutFeedback>

                <Image style={styles.isotype} source={Isotype}></Image>
                <Text style={{ ...BaseStyles.subtitle, ...styles.subtitle }}>Sign up</Text>
                <FormalInput
                    style={{ marginBottom: 20 }}
                    icon={AvatarIcon}
                    label="Full name"
                    value={form.fullName}
                    onChange={(value) => onAttributeChanged("fullName", value)}
                    placeholder="Enter your full name">
                </FormalInput>
                <FormalInput
                    style={{ marginBottom: 20 }}
                    label="Email"
                    icon={EmailIcon}
                    value={form.email}
                    onChange={(value) => onAttributeChanged("email", value)}
                    placeholder="Enter your email">
                </FormalInput>
                <FormalInput
                    style={{ marginBottom: 20 }}
                    label="PhoneNumber"
                    icon={PhoneIcon}
                    value={form.phoneNumber}
                    onChange={(value) => onAttributeChanged("phoneNumber", value)}
                    placeholder="Enter your phone number">
                </FormalInput>
                <FormalInput
                    style={{ marginBottom: 20 }}
                    label="Password"
                    icon={PasswordIcon}
                    isProtected={true}
                    value={form.password}
                    onChange={(value) => onAttributeChanged("password", value)}
                    placeholder="Enter your password">
                </FormalInput>
                <FormalInput
                    style={{ marginBottom: 20 }}
                    label="Repeat password"
                    icon={PasswordIcon}
                    isProtected={true}
                    value={form.repeatPassword}
                    onChange={(value) => onAttributeChanged("repeatPassword", value)}
                    placeholder="Repeat your password">
                </FormalInput>
                <PrimaryButton
                    title="Sign up"
                    style={{ marginBottom: 15 }}
                    onPress={() => submit()}>
                </PrimaryButton>

                {/* Terms and conditions */}
                <Text style={styles.regularText}>By signing up, you agree with our
                    <TouchableWithoutFeedback onPress={() => navigateToTerms()}>
                            <Text style={styles.termsLink}>terms and conditions and privacy policy</Text>
                    </TouchableWithoutFeedback>
                </Text>

                {/* Sign In instead */}
                <Text style={styles.regularText}>
                    Already have an account?
                <TouchableWithoutFeedback onPress={() => goBack()}>
                        <Text style={styles.signIn}> Sign in</Text>
                    </TouchableWithoutFeedback>
                </Text>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
    },
    back: {
        height: 44,
        width: 44,
        alignSelf: "flex-start",
        marginBottom: 20
    },
    isotype: {
        resizeMode: 'contain',
        height: 130,
        marginBottom: 50
    },
    subtitle: {
        textAlign: "left",
        width: "100%",
        fontSize: 24,
        marginBottom: 30
    },
    regularText: {
        fontFamily: "Neuton_400Regular",
        fontSize: 16,
        color: Colors.TEXT_PRIMARY,
        marginBottom: 10,
        textAlign: "center"
    },
    termsLink: {
        color: Colors.FORMAL_BLUE,
        fontWeight: "bold"
    },
    signIn: {
        fontFamily: 'Neuton_700Bold',
        fontSize: 16,
        textAlign: "center",
        width: "100%",
        color: Colors.FORMAL_BLUE,
    }
})


export default SignUpScreen
