import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, Neuton_400Regular, Neuton_700Bold } from '@expo-google-fonts/neuton'
import BaseStyles from './BaseStyles';
import NextAppointmentCard from './components/NextAppointmentCard';

const Isotype = require("./assets/isotype.png")

export default function App() {

	const [fontsLoaded] = useFonts({ Neuton_400Regular, Neuton_700Bold })

	if (!fontsLoaded)
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		)

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image style={styles.isotype} source={Isotype}></Image>
				<View style={styles.logo}>
					<Text style={{ ...BaseStyles.title, ...styles.title }}>Formal</Text>
					<Text style={{ ...BaseStyles.subtitle, ...styles.subtitle }}>Barbershop & Grooming Store</Text>
				</View>
			</View>
			
			<View style={styles.nextAppointment}>
				<NextAppointmentCard/>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	isotype: {
		resizeMode: 'contain',
		height: 150,
		marginBottom: 10
	},
	logo: {
		alignItems: 'center',
		width: '50%',
	},
	title: {
		textAlign: 'center',
		marginBottom: 10
	},
	subtitle: {
		textAlign: 'center',
	},
	nextAppointment: {
		width: '100%',
		padding: 10
	}
});
