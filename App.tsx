import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, Neuton_400Regular, Neuton_700Bold } from '@expo-google-fonts/neuton'
import BaseStyles from './BaseStyles';

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
			<Image style={styles.isotype} source={Isotype}></Image>
			<View style={styles.logo}>
				<Text style={{ ...BaseStyles.title, ...styles.title }}>Formal</Text>
				<Text style={{ ...BaseStyles.subtitle, ...styles.subtitle }}>Barbershop & Grooming Store</Text>
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
	isotype: {
		resizeMode: 'contain',
		height: 150,
		marginBottom: 10
	},
	logo: {
		alignItems: 'center',
		width: '50%'
	},
	title: {
		textAlign: 'center',
		marginBottom: 10
	},
	subtitle: {
		textAlign: 'center',
	}
});
