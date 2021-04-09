import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BaseStyles from '../BaseStyles';
import Colors from '../Colors';
import FormalInput from '../components/FormalInput';
import PrimaryButton from '../components/PrimaryButton';
import AppointmentService from '../services/AppointmentService';
import { UpdateProfileReq } from '../types/UpdateProfileReq';
import { UserProfile } from '../types/UserProfile';

const EmailIcon = require("../assets/email-icon.png")
const AvatarIcon = require("../assets/avatar-icon.png")
const PhoneIcon = require("../assets/phone-icon.png")
const CalendarIcon = require("../assets/calendar-icon.png")

const MyAccountScreen: React.FC = () => {

    const [userProfile, setUserProfile] = useState<UserProfile>()
    const [form, setForm] = useState<UpdateProfileReq>({
        fullName: "",
        birthDate: "",
        phoneNumber: ""
    })

    const onAttributeChanged = (attribute: string, value: string) => {
        setForm({
            ...form,
            [attribute]: value
        })
    }

    const getUserProfile = async () => {
        const response = await AppointmentService.getUserProfile()
        setUserProfile(response)
    }

    useEffect(() => {
        getUserProfile()
    },[])

    useEffect(() => {
        if(userProfile) {
            setForm({
                fullName: userProfile.fullName,
                phoneNumber: userProfile.phoneNumber,
                birthDate: userProfile.birthDate
            })
        }
    },[userProfile])

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                {userProfile && form && (
                    <View style={styles.top}>
                    <Text style={{ ...BaseStyles.subtitle, ...styles.subtitle }}>Mauro Garcia</Text>
                    <FormalInput
                        label="Email"
                        icon={EmailIcon}
                        readOnly={true}
                        value={userProfile.email}
                        onChange={(value) => onAttributeChanged("email", value)}
                        style={styles.input}>
                    </FormalInput>
                    <FormalInput
                        icon={AvatarIcon}
                        label="Full name"
                        value={form.fullName}
                        onChange={(value) => onAttributeChanged("fullName", value)}
                        style={styles.input}>
                    </FormalInput>
                    <FormalInput
                        icon={PhoneIcon}
                        label="Phone Number"
                        value={form.phoneNumber}
                        onChange={(value) => onAttributeChanged("phoneNumber", value)}
                        style={styles.input}>
                    </FormalInput>
                    <FormalInput
                        icon={CalendarIcon}
                        label="Birth date"
                        value={form.birthDate}
                        onChange={(value) => onAttributeChanged("birthDate", value)}
                        style={styles.input}>
                    </FormalInput>
                </View>
                )}
                
                <View style={styles.actions}>
                    <PrimaryButton
                        title="Sign out"
                        backgroundColor={Colors.FORMAL_GRAY}
                        titleColor={Colors.FORMAL_BLUE}
                        onPress={() => console.log("sign out tapped")}
                        style={{ marginBottom: 10 }}>
                    </PrimaryButton>
                    <PrimaryButton
                        title="Save"
                        onPress={() => console.log("Save tapped")}>
                    </PrimaryButton>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        textAlign: "left",
        width: "100%",
        fontSize: 24,
        marginBottom: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 50,
        paddingBottom: 10
    },
    input: {
        marginBottom: 20
    },
    actions: {
        flexDirection: "column",
        justifyContent: "flex-end",
        flex: 1
    },
    top: {
        paddingHorizontal: 40
    }
})

export default MyAccountScreen
