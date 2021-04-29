import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Colors from '../Colors';

type TypeOfWorkCardProps = {
    id: string
    name: string
    duration: string
    price: number
    onTypeOfWorkSelected: (id: string) => void
}

const TypeOfWorkCard: React.FC<TypeOfWorkCardProps> = (props) => {

    const { id, name, duration, price, onTypeOfWorkSelected } = props

    return (
        <TouchableWithoutFeedback onPress={() => onTypeOfWorkSelected(id)}>
            <View key={id} style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.duration}>{duration}</Text>
                </View>
                <Text style={styles.price}>$ {price}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.FORMAL_GRAY,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        color: Colors.FORMAL_BLUE,
        fontFamily: 'Neuton_700Bold',
        fontSize: 18
    },
    body: {
        flex: 1
    },
    duration: {
        fontFamily: 'Neuton_400Regular',
        color: Colors.TEXT_PRIMARY,
        fontSize: 16
    },
    price: {
        fontFamily: 'Neuton_700Bold',
        fontSize: 16
    }
})

export default TypeOfWorkCard
