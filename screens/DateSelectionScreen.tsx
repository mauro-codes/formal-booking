import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    Image,
    Platform,
} from "react-native";
import Colors from "../Colors";
import TurnCard from "../components/TurnCard";
import { Turn } from "../entities/Turn";
import AppointmentService from "../services/AppointmentService";
import DateHelper from "../helpers/DateHelper";
import DateTimePicker, {Event} from "@react-native-community/datetimepicker";

const DateSelectionScreen: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [turns, setTurns] = useState<Turn[]>([]);
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
    const CalendarIcon = require("../assets/calendar-icon.png");
    const navigation = useNavigation();

    const getAvailableTurns = async () => {
        const response = await AppointmentService.getTurns(
            selectedDate,
            "1234"
        );
        setTurns(response);
    };

    useEffect(() => {
        getAvailableTurns();
    }, [selectedDate]);
    
    const onDateChanged = (event: Event, selectedDate?: Date | undefined) => {
        const currentDate = selectedDate || new Date()
        setShowDatePicker(Platform.OS === 'ios');
        setSelectedDate(currentDate);
      };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Pick a date for your appointment
                </Text>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>
                    {DateHelper.getNormalDate(selectedDate)}
                </Text>
                <TouchableWithoutFeedback onPress={() => setShowDatePicker(true)}>
                    <Image style={styles.calendarIcon} source={CalendarIcon} />
                </TouchableWithoutFeedback>
            </View>

            <View style={styles.servicesWrapper}>
                {turns.map((turn, i) => (
                    <TurnCard key={`turn-${i}`}
                        hour={turn.hour}
                        minutes={turn.minutes}
                        available={turn.available}
                        onTurnSelected={(hour, minutes) =>
                            navigation.navigate("Confirmation")
                        }
                    />
                ))}
            </View>
                {showDatePicker && (
                    <DateTimePicker
                      value={selectedDate}
                      mode={"date"}
                      display="default"
                      onChange={onDateChanged}
                    />
                )}
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.FORMAL_GRAY,
        paddingHorizontal: 18,
        paddingVertical: 7,
    },
    title: {
        color: Colors.TEXT_PRIMARY,
        fontFamily: "Neuton_700Bold",
        fontSize: 18,
    },
    servicesWrapper: {
        padding: 25,
    },
    dateContainer: {
        backgroundColor: Colors.FORMAL_GRAY_DARK,
        padding: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    date: {
        color: Colors.TEXT_PRIMARY_LIGHT,
        fontFamily: "Neuton_700Bold",
        fontSize: 16,
    },
    calendarIcon: {
        resizeMode: "contain",
        tintColor: "white",
        height: 25,
        width: 25
    }
});

export default DateSelectionScreen;
