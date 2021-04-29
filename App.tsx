import React from 'react';
import { Text, View } from 'react-native';
import { useFonts, Neuton_400Regular, Neuton_700Bold } from '@expo-google-fonts/neuton';
import { NavigationContainer } from "@react-navigation/native";
import GlobalNavigation from './navigation/GlobalNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

	const [fontsLoaded] = useFonts({ Neuton_400Regular, Neuton_700Bold })

	if (!fontsLoaded)
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		)

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<GlobalNavigation />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
