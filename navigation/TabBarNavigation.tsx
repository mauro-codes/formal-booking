import { createBottomTabNavigator, BottomTabBarOptions } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
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
import MyAccountScreen from "../screens/MyAccount"
import LoginScreen from "../screens/LoginScreen"

const Tab = createBottomTabNavigator()
const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator initialRouteName="Login">
			<HomeStack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
			<HomeStack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
		</HomeStack.Navigator>
	)
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
