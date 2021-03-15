import { StyleSheet } from 'react-native'
import Colors from './Colors'

const BaseStyles = StyleSheet.create({
    title: {
        fontFamily: 'Neuton_700Bold',
        fontSize: 46,
        color: Colors.FORMAL_BLUE
    },
    subtitle: {
        fontFamily: 'Neuton_700Bold',
        fontSize: 24,
        color: Colors.FORMAL_BLUE
    }
})

export default BaseStyles