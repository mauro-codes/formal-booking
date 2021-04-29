import {useNavigation} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Colors from '../Colors';
import TypeOfWorkCard from '../components/TypeOfWorkCard';
import { TypeOfWork } from '../entities/TypeOfWork';
import AppointmentService from '../services/AppointmentService';

const TypeOfWorkSelectionScreen: React.FC = () => {
    
    const [typesOfWork, setTypesOfWork] = useState<TypeOfWork[]>([])

    const navigation = useNavigation()

    const getTypesOfWork = async () => {
        const response = await AppointmentService.getTypesOfWork()
        setTypesOfWork(response)
    }

    useEffect(() => {
        getTypesOfWork()
    },[])
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Pick a service</Text>
            </View>
            <View style={styles.servicesWrapper}>
                {typesOfWork.map((typeOfWork) => (
                    <TypeOfWorkCard
                        id={typeOfWork.id}
                        name={typeOfWork.name}
                        duration={typeOfWork.duration}
                        price={typeOfWork.price}
                        onTypeOfWorkSelected={(id) => navigation.navigate("DateSelection", {id})}>
                    </TypeOfWorkCard>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.FORMAL_GRAY,
        paddingHorizontal: 18,
        paddingVertical: 7
    },
    title: {
        color: Colors.TEXT_PRIMARY,
        fontFamily: 'Neuton_700Bold',
        fontSize: 18
    },
    servicesWrapper: {
        padding: 25
    }
})

export default TypeOfWorkSelectionScreen  
