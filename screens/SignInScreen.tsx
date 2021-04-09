import { useNavigation } from "@react-navigation/core"
import React, { useState } from "react"
import { Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableWithoutFeedback } from "react-native"
import BaseStyles from "../BaseStyles"
import Colors from "../Colors"
import FormalInput from "../components/FormalInput"
import PrimaryButton from "../components/PrimaryButton"
import { SignInReq } from "../types/SignInReq"

const Isotype = require("../assets/isotype.png")
const EmailIcon = require("../assets/email-icon.png")
const PasswordIcon = require("../assets/password-icon.png")
const SignInIcon = require("../assets/signin-icon.png")
const SignInScreen: React.FC = () => {

    const [form, setForm] = useState<SignInReq>({
        email: "",
        password: ""
    })

    const navigation = useNavigation()

    const navigateToSignUp = () => {
        navigation.navigate("SignUp")
    }

    const navigateToForgotPassword = () => {
        navigation.navigate("ForgotPassword")
    }

    const navigateToHome = () => {
        navigation.navigate("Home")
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
                <Image style={styles.isotype} source={Isotype}></Image>
                <Text style={{ ...BaseStyles.subtitle, ...styles.subtitle }}>Sign in</Text>
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
                    label="Password"
                    icon={PasswordIcon}
                    isProtected={true}
                    value={form.password}
                    onChange={(value) => onAttributeChanged("password", value)}
                    placeholder="Enter your password">
                </FormalInput>
                <PrimaryButton
                    title="Sign in"
                    icon={SignInIcon}
                    style={{marginBottom: 15}}
                    onPress={() => navigateToHome()}>
                </PrimaryButton>
                <TouchableWithoutFeedback onPress={() => navigateToForgotPassword()}>
                    <Text style={styles.forgotPassword}>Forgot your password?</Text>    
                </TouchableWithoutFeedback>
                
                <Text style={styles.socialLoginLabel}>Or sign in with</Text>
                <PrimaryButton
                    title="Facebook"
                    style={{marginBottom: 15}}
                    backgroundColor={Colors.FACEBOOK_BLUE}
                    onPress={() => console.log("sign in tapped")}>
                </PrimaryButton>
                <TouchableWithoutFeedback onPress={() => navigateToSignUp()}>
                    <Text style={styles.signUp}>Sign up</Text>
                </TouchableWithoutFeedback>
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
    forgotPassword: {   
        fontFamily: 'Neuton_700Bold',
        fontSize: 16,
        textAlign: "right",
        width: "100%",
        color: Colors.FORMAL_BLUE,
        flex: 1,
        marginBottom: 30
    },
    socialLoginLabel: {
        fontFamily: "Neuton_400Regular",
        fontSize: 16,
        marginBottom: 10
    },
    signUp: {
        fontFamily: 'Neuton_700Bold',
        fontSize: 16,
        textAlign: "center",
        width: "100%",
        color: Colors.FORMAL_BLUE,
    }
})

export default SignInScreen
