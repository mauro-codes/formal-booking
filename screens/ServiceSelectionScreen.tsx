import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Colors from '../Colors';
import ServiceCard from '../components/ServiceCard';
import { Service } from '../entities/Service';
import AppointmentService from '../services/AppointmentService';

const ServiceSelectionScreen: React.FC = () => {
    
    const [services, setServices] = useState<Service[]>([])

    const getServices = async () => {
        const response = await AppointmentService.getServices()
        setServices(response)
    }

    useEffect(() => {
        getServices()
    },[])
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Pick a service</Text>
            </View>
            <View style={styles.servicesWrapper}>
                {services.map((service) => (
                    <ServiceCard 
                        name={service.name}
                        duration={service.duration}
                        price={service.price}>
                    </ServiceCard>
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

export default ServiceSelectionScreen