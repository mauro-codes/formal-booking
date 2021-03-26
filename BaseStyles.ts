import { StyleSheet } from 'react-native'
import Colors from './Colors'

const BaseStyles = StyleSheet.create({
    title: {
        fontFamily: 'Neuton_700Bold',
        fontSize: 40,
        color: Colors.FORMAL_BLUE
    },
    subtitle: {
        fontFamily: 'Neuton_700Bold',
        fontSize: 22,
        color: Colors.FORMAL_BLUE
    },
    tabBarIcon: {
		width: 30,
		height: 30,
		resizeMode: "contain"
	},
})

export default BaseStyles