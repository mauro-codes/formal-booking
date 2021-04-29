import { createBottomTabNavigator, BottomTabBarOptions } from "@react-navigation/bottom-tabs"
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"
import { Image, ImageStyle } from "react-native"
import BaseStyles from "../BaseStyles"
import * as React from "react"
import Colors from "../Colors"

// Assets
const HomeIcon = require("../assets/home-icon.png")
const AppointmentsIcon = require("../assets/appointments-icon.png")
const MyAccountIcon = require("../assets/my-account-icon.png")

// Screens
import HomeScreen from "../screens/HomeScreen"
import AppointmentsScreen from "../screens/AppointmentsScreen"
import MyAccountScreen from "../screens/MyAccountScreen"
import SignInScreen from "../screens/SignInScreen"
import SignUpScreen from "../screens/SignUpScreen"
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen"
import ResetPasswordScreen from "../screens/ResetPasswordScreen"
import TypeOfWorkSelectionScreen from "../screens/TypeOfWorkSelectionScreen"
import DateSelectionScreen from "../screens/DateSelectionScreen"

const Tab = createBottomTabNavigator()
const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator initialRouteName="SignIn">
			<HomeStack.Screen name="SignIn" options={{ headerShown: false }} component={SignInScreen} />
			<HomeStack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
			<HomeStack.Screen name="ForgotPassword" options={{ headerShown: false }} component={ForgotPasswordScreen} />
			<HomeStack.Screen name="ResetPassword" options={{ headerShown: false }} component={ResetPasswordScreen} />
			<HomeStack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
			<HomeStack.Screen 
				name="TypeOfWorkSelection" 
				options={{ 
					headerTitle: "New appointment", 
					...headerOptions
				}} 
				component={TypeOfWorkSelectionScreen} />
			<HomeStack.Screen 
				name="DateSelection" 
				options={{ 
					headerTitle: "New appointment", 
					...headerOptions
				}} 
				component={DateSelectionScreen} />

		</HomeStack.Navigator>
	)
}

const headerOptions: StackNavigationOptions = {
	headerStyle: { 
		backgroundColor: Colors.FORMAL_BLUE 
	},
	headerTitleStyle: {
		color: Colors.TEXT_PRIMARY_LIGHT
	},
	headerTintColor: Colors.TEXT_PRIMARY_LIGHT
}

const TabBarNavigation: React.FC = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => {
				return {
					tabBarIcon: ({ focused }) => {
						let icon

						switch (route.name) {
							case "HomeTab":
								icon = HomeIcon
								break

							case "AppointmentsTab":
								icon = AppointmentsIcon
								break

							case "MyAccountTab":
								icon = MyAccountIcon
								break
						}

						const dynamicStyles: ImageStyle = {
							tintColor: focused ? Colors.TEXT_PRIMARY_LIGHT : Colors.TEXT_PRIMARY
						}

						return <Image source={icon} style={{ ...BaseStyles.tabBarIcon, ...dynamicStyles }} />
					}
				}
			}}
			tabBarOptions={setTabBarOptions}
			initialRouteName="HomeTab"
		>
			<Tab.Screen name="HomeTab" options={{ tabBarLabel: "Home" }} component={HomeStackScreen} />
			<Tab.Screen name="AppointmentsTab" options={{ tabBarLabel: "Appointments" }} component={AppointmentsScreen} />
			<Tab.Screen name="MyAccountTab" options={{ tabBarLabel: "MyAccount" }} component={MyAccountScreen} />
		</Tab.Navigator>
	)
}

const setTabBarOptions: BottomTabBarOptions = {
	style: {
		height: 62,
	},
	activeBackgroundColor: Colors.FORMAL_BLUE, 
	activeTintColor: Colors.TEXT_PRIMARY_LIGHT,
	inactiveTintColor: Colors.TEXT_PRIMARY,
	labelStyle: {
		fontSize: 14,
		fontWeight: 'bold'
	},
	tabStyle: {
		padding: 4
	}
}

export default TabBarNavigation
