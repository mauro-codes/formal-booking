import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from "react-native"
import Colors from "../Colors"
import { Appointment } from '../types/Appointment';
import DateHelper from '../helpers/DateHelper';
import AppointmentService from '../services/AppointmentService';

const CalendarIcon = require("../assets/calendar.png")

const NextAppointmentCard: React.FC = () => {

    const [appointment, setAppointment] = useState<Appointment>()

    const getNextAppointment = async () => {
        const result = await AppointmentService.getNext()
        setAppointment(result)
    }

    useEffect(() => {
        getNextAppointment()
    }, [])

    if (!appointment)
        return <></>

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>Next appointment</Text>
                <View style={styles.body}>
                    <Image style={styles.calendarIcon} source={CalendarIcon}></Image>
                    <View>
                        <Text style={styles.date}>{DateHelper.getLongDate(appointment.date)}</Text>
                        <Text style={styles.hour}>{DateHelper.getHour(appointment.date)}</Text>
                        <Text style={styles.service}>{appointment.service}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.FORMAL_GRAY,
        padding: 24,
        alignItems: 'center',
        width: '100%'
    },
    box: {
        alignItems: 'flex-start'
    },
    title: {
        fontFamily: 'Neuton_700Bold',
        fontSize: 18,
        marginBottom: 10,
        color: Colors.TEXT_PRIMARY
    },
    body: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    calendarIcon: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
        marginRight: 16
    },
    date: {
        fontSize: 20,
        fontFamily: 'Neuton_700Bold',
        color: Colors.TEXT_PRIMARY
    },
    hour: {
        fontSize: 24,
        fontFamily: 'Neuton_700Bold',
        color: Colors.TEXT_PRIMARY
    },
    service: {
        fontSize: 16,
        fontFamily: 'Neuton_400Regular',
        color: Colors.TEXT_PRIMARY
    }
})

export default NextAppointmentCard