import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import DateHelper from "../helpers/DateHelper";
import React from "react";
import Colors from "../Colors";
import PrimaryButton from "../components/PrimaryButton";
import {useNavigation} from "@react-navigation/native";

const ClockIcon = require("../assets/clock-icon.png");
const ScissorIcon = require("../assets/scissor-icon.png");
const MoneyIcon = require("../assets/money-icon.png");

const SummaryScreen: React.FC = () => {
    const navigation = useNavigation()
    return (
        <ScrollView
            contentContainerStyle={{ justifyContent: "space-between", flex: 1 }}
        >
            <View>
                <View key="appointment-date-time" style={styles.card}>
                    <Image source={ClockIcon} style={styles.icon}></Image>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>
                            {DateHelper.getNormalDate(new Date())}
                        </Text>
                        <Text style={styles.subtitle}>
                            {DateHelper.getHour(new Date())}
                        </Text>
                    </View>
                </View>
                <View key="appointment-description" style={styles.card}>
                    <Image source={ScissorIcon} style={styles.icon}></Image>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>Haircut</Text>
                        <Text style={styles.subtitle}>30 minutes</Text>
                    </View>
                </View>
                <View key="appointment-price" style={styles.card}>
                    <Image source={MoneyIcon} style={styles.icon}></Image>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.moneyLabel}>$20,00</Text>
                    </View>
                </View>
            </View>
            <View style={{ padding: 10 }}>
                <PrimaryButton onPress={() => navigation.navigate("Home")} title="Confirm" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    card: {
        display: "flex",
        marginHorizontal: 50,
        paddingVertical: 24,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 50,
        borderColor: Colors.FORMAL_GRAY,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 22,
        resizeMode: "contain",
    },
    title: {
        fontSize: 25,
        fontFamily: "Neuton_700Bold",
        color: Colors.FORMAL_BLUE,
    },
    subtitle: {
        fontFamily: "Neuton_400Regular",
        fontSize: 20,
    },
    moneyLabel: {
        fontSize: 36,
        fontFamily: "Neuton_700Bold",
        color: Colors.FORMAL_BLUE,
    },
});
export default SummaryScreen;
