import React from "react"
import { Text, SafeAreaView, StyleSheet, Image } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import BaseStyles from "../BaseStyles"
import Colors from "../Colors"
import FormalInput from "../components/FormalInput"
import PrimaryButton from "../components/PrimaryButton"

const Isotype = require("../assets/isotype.png")
const EmailIcon = require("../assets/email-icon.png")
const PasswordIcon = require("../assets/password-icon.png")
const SignInIcon = require("../assets/signin-icon.png")
const SignInScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.isotype} source={Isotype}></Image>
            <Text style={{ ...BaseStyles.subtitle, ...styles.subtitle }}>Sign in</Text>
            <FormalInput
                style={{ marginBottom: 20 }}
                label="Email"
                icon={EmailIcon}
                placeholder="Enter your email">
            </FormalInput>
            <FormalInput
                style={{ marginBottom: 20 }}
                label="Password"
                icon={PasswordIcon}
                isProtected={true}
                placeholder="Enter your password">
            </FormalInput>
            <PrimaryButton
                title="Sign in"
                icon={SignInIcon}
                style={{marginBottom: 15}}
                onPress={() => console.log("sign in tapped")}>
            </PrimaryButton>
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
            <Text style={styles.socialLoginLabel}>Or sign in with</Text>
            <PrimaryButton
                title="Facebook"
                style={{marginBottom: 15}}
                backgroundColor={Colors.FACEBOOK_BLUE}
                onPress={() => console.log("sign in tapped")}>
            </PrimaryButton>
            <TouchableWithoutFeedback onPress={() => console.log("Sign up tapped")}>
                <Text style={styles.signUp}>Sign up</Text>
            </TouchableWithoutFeedback>
        </SafeAreaView>
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
        flex: 1
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