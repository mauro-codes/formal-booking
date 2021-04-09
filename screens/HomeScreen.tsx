import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { useFonts, Neuton_400Regular, Neuton_700Bold } from '@expo-google-fonts/neuton'
import BaseStyles from '../BaseStyles';
import NextAppointmentCard from '../components/NextAppointmentCard';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Isotype = require("../assets/isotype.png")
const BackgroundImage = require("../assets/home-bg.png")

const HomeScreen: React.FC = () => {

	const [fontsLoaded] = useFonts({ Neuton_400Regular, Neuton_700Bold })
    const navigation = useNavigation()

	const navigateToNewAppointment = () => {
		navigation.navigate("ServiceSelection")
	}

	if (!fontsLoaded)
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		)

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Image style={styles.isotype} source={Isotype}></Image>
				<View style={styles.logo}>
					<Text style={{ ...BaseStyles.title, ...styles.title }}>Formal</Text>
					<Text style={{ ...BaseStyles.subtitle, ...styles.subtitle }}>Barbershop & Grooming Store</Text>
				</View>
			</View>

			<ImageBackground source={BackgroundImage} style={styles.footer}>
				<View style={styles.nextAppointment}>
					<NextAppointmentCard />
				</View>
				<View style={styles.newAppointment}>
					<PrimaryButton 
						backgroundColor={Colors.TEXT_PRIMARY_LIGHT} 
						titleColor={Colors.FORMAL_BLUE} 
						title="New appointment" 
						onPress={() => navigateToNewAppointment()}>	
					</PrimaryButton>
				</View>
			</ImageBackground>
		</SafeAreaView>
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
		height: 90,
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
	},
	newAppointment: {
		width: '100%',
		paddingHorizontal: 10,
		paddingBottom: 10
	},
	footer: {
		width: '100%',
		height: 450,
		display: 'flex',
		justifyContent: 'flex-end'
	}
});

export default HomeScreen
